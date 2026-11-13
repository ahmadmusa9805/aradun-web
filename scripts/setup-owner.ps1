param([switch]$Check, [switch]$Atlas)

$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
$taskNode = Join-Path $taskRoot '.tools\node-v24.22.2-win-x64\node.exe'
if (!(Test-Path -LiteralPath $taskNode)) {
    $taskNode = (Get-Command node -ErrorAction Stop).Source
}
$taskVersion = & $taskNode --version
if ($LASTEXITCODE -ne 0 -or $taskVersion -notmatch '^v24\.') {
    throw 'Use the approved Node.js 24 runtime.'
}
if ($Check) {
    if ($Atlas) {
        Push-Location $taskRoot
        try { & $taskNode --env-file=backend/.env --import tsx backend/scripts/staff/owner-atlas.ts --check; $taskCheckExit = $LASTEXITCODE }
        finally { Pop-Location }
        exit $taskCheckExit
    }
    Write-Output 'Owner prompt ready. Node 24 verified; no password read, account mutation or email.'
    exit 0
}

if ($Atlas) {
    Write-Host 'One-time ATLAS development owner setup: aradun_development on the approved cluster.'
    Write-Host 'Uses the backend/.env connection for this explicit private bootstrap only; local data stays unchanged.'
} else { Write-Host 'One-time LOCAL owner setup: aradun_development on 127.0.0.1:27017 (rs0).' }
Write-Host 'Ahmad Musa Abdullah / ahmadmusa@aradun.com / Admin with mandatory MFA.'
Write-Host 'This creates a real account using the existing audited bootstrap. It refuses a second owner.'
Write-Host 'Use a private terminal without recording. Never share the password in chat.'
if ((Read-Host 'Type CREATE OWNER to continue') -cne 'CREATE OWNER') {
    Write-Host 'Cancelled. No account created.'
    exit 0
}

$taskPassword = $null
$taskConfirmation = $null
$taskPlain = $null
$taskConfirmPlain = $null
$taskPayload = $null
$taskProcess = $null
try {
    $taskPassword = Read-Host 'Choose your password (15-128 characters; hidden)' -AsSecureString
    $taskConfirmation = Read-Host 'Confirm password (hidden)' -AsSecureString
    if ($taskPassword.Length -lt 15 -or $taskPassword.Length -gt 128) {
        throw 'Password must contain 15-128 characters. No account created.'
    }
    $taskPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($taskPassword)
    try { $taskPlain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($taskPointer) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($taskPointer) }
    $taskPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($taskConfirmation)
    try { $taskConfirmPlain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($taskPointer) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($taskPointer) }
    if ($taskPlain -cne $taskConfirmPlain) {
        throw 'Passwords do not match. No account created.'
    }
    $taskCommandId = [guid]::NewGuid().ToString()
    $taskPayload = @{
        database = 'aradun_development'
        input = @{
            commandId = $taskCommandId
            approvalReference = "owner-terminal:$taskCommandId"
            email = 'ahmadmusa@aradun.com'
            confirmedOwnerEmail = 'ahmadmusa@aradun.com'
            displayName = 'Ahmad Musa Abdullah'
            password = $taskPlain
        }
    } | ConvertTo-Json -Depth 4 -Compress

    $taskStart = New-Object System.Diagnostics.ProcessStartInfo
    $taskStart.FileName = $taskNode
    $taskStart.Arguments = '--import tsx backend/scripts/staff/access.ts --bootstrap'
    if ($Atlas) { $taskStart.Arguments = '--env-file=backend/.env --import tsx backend/scripts/staff/owner-atlas.ts --bootstrap' }
    $taskStart.WorkingDirectory = $taskRoot
    $taskStart.UseShellExecute = $false
    $taskStart.CreateNoWindow = $true
    $taskStart.RedirectStandardInput = $true
    $taskStart.RedirectStandardOutput = $true
    $taskStart.RedirectStandardError = $true
    # Arming exists only in this one child process; no persistent operational file.
    if ($Atlas) { $taskStart.EnvironmentVariables['ARADUN_ATLAS_OWNER_SETUP'] = 'confirmed' }
    else {
        $taskStart.EnvironmentVariables['APP_ENV'] = 'development'
        $taskStart.EnvironmentVariables['DB_OPERATIONS_URI'] = 'mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0'
        $taskStart.EnvironmentVariables['MONGODB_DB_NAME'] = 'aradun_development'
        $taskStart.EnvironmentVariables['ENABLE_LOCAL_STAFF_LIFECYCLE'] = 'true'
        $taskStart.EnvironmentVariables['ALLOW_LOCAL_STAFF_BOOTSTRAP'] = 'true'
    }
    $taskProcess = New-Object System.Diagnostics.Process
    if ($env:NODE_ENV -eq 'test' -and $taskProcess -is [System.Diagnostics.Process]) {
        throw 'Automated tests cannot launch a real owner bootstrap.'
    }
    $taskProcess.StartInfo = $taskStart
    [void]$taskProcess.Start()
    $taskOut = $taskProcess.StandardOutput.ReadToEndAsync()
    $taskErr = $taskProcess.StandardError.ReadToEndAsync()
    $taskProcess.StandardInput.Write($taskPayload)
    $taskProcess.StandardInput.Close()
    $taskProcess.WaitForExit()
    if ($taskProcess.ExitCode -ne 0) {
        throw 'Bootstrap refused or failed. Do not retry blindly or reset the database. Review existing state with the developer; no raw output is shown.'
    }
    $taskReceipt = $taskOut.GetAwaiter().GetResult() | ConvertFrom-Json
    [void]$taskErr.GetAwaiter().GetResult()
    if ($taskReceipt.staffUserId -notmatch '^[a-f0-9]{24}$' -or $taskReceipt.auditId -notmatch '^[a-f0-9]{24}$' -or !$taskReceipt.requiresMfaEnrollment) {
        throw 'Unexpected bootstrap receipt. Stop and review existing state before retrying.'
    }
    Write-Host 'Owner created in the selected development database. Keep this safe receipt; it contains no password.'
    [pscustomobject]@{ staffUserId = $taskReceipt.staffUserId; auditId = $taskReceipt.auditId; requiresMfaEnrollment = $true } | ConvertTo-Json -Compress
    Write-Host 'Restart the backend, then open http://127.0.0.1:3000/staff/login. Existing security policy is unchanged.'
    Write-Host 'Forms and email are still off. Do not paste passwords, factor seeds, codes or cookies into chat.'
}
catch {
    # Do not print child stderr or exception details that could contain private input.
    Write-Host 'Owner setup did not complete cleanly. Check password length/match or existing bootstrap state; never reset identity records to retry.'
    exit 1
}
finally {
    if ($taskPassword) { $taskPassword.Dispose() }
    if ($taskConfirmation) { $taskConfirmation.Dispose() }
    if ($taskProcess) { $taskProcess.Dispose() }
    $taskPlain = $null
    $taskConfirmPlain = $null
    $taskPayload = $null
    # Managed strings cannot guarantee memory zeroization; no secret file/history is created.
}
