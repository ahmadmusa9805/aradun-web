param([ValidateSet('success','short','mismatch','cancel','refused')][string]$Scenario, [switch]$Atlas)
$global:ownerPromptAtlas = $Atlas.IsPresent
$global:ownerPromptScenario = $Scenario
# Synthetic prompt/child-process fixture. It never connects to any database.
$global:ownerPromptsynthetic = 'SAMPLE-Private-Prompt-Only-4829'
$global:ownerPromptcaptured = $null
$global:ownerPromptspawned = 0
$global:ownerPromptsecureReads = 0
function Read-Host {
    param([string]$Prompt, [switch]$AsSecureString)
    if (!$AsSecureString) { if ($global:ownerPromptScenario -eq 'cancel') { return 'NO' }; return 'CREATE OWNER' }
    $global:ownerPromptsecureReads++
    $value = $global:ownerPromptsynthetic
    if ($global:ownerPromptScenario -eq 'short') { $value = 'short' }
    if ($global:ownerPromptScenario -eq 'mismatch' -and $global:ownerPromptsecureReads -eq 2) { $value = 'SAMPLE-different-private-password' }
    $secure = [Security.SecureString]::new()
    foreach ($character in $value.ToCharArray()) { $secure.AppendChar($character) }
    return $secure
}
function New-Object {
    param([string]$TypeName)
    if ($TypeName -ne 'System.Diagnostics.Process') {
        return Microsoft.PowerShell.Utility\New-Object -TypeName $TypeName
    }
    $writer = [pscustomobject]@{}
    $writer | Add-Member ScriptMethod Write { param($value) $global:ownerPromptcaptured = $value }
    $writer | Add-Member ScriptMethod Close {}
    $reader = [pscustomobject]@{}
    $reader | Add-Member ScriptMethod GetAwaiter { return $this }
    $reader | Add-Member ScriptMethod GetResult { return '{"staffUserId":"123456789012345678901234","auditId":"123456789012345678901235","requiresMfaEnrollment":true,"password":"PRIVATE-CHILD-STDOUT-SENTINEL"}' }
    $stream = [pscustomobject]@{ Reader = $reader }
    $stream | Add-Member ScriptMethod ReadToEndAsync { return $this.Reader }
    $process = [pscustomobject]@{ StartInfo = $null; StandardInput = $writer; StandardOutput = $stream; StandardError = $stream; ExitCode = $(if($global:ownerPromptScenario -eq 'refused'){1}else{0}) }
    $process | Add-Member ScriptMethod Start {
        $global:ownerPromptspawned++
        $expectedDelegate = if ($global:ownerPromptAtlas) { '--env-file=backend/.env --import tsx backend/scripts/staff/owner-atlas.ts --bootstrap' } else { '--import tsx backend/scripts/staff/access.ts --bootstrap' }
        if ($this.StartInfo.Arguments -ne $expectedDelegate) { throw 'Wrong delegate' }
        if ($this.StartInfo.UseShellExecute -or !$this.StartInfo.RedirectStandardInput) { throw 'Unsafe process boundary' }
        if ($global:ownerPromptAtlas) {
            if ($this.StartInfo.EnvironmentVariables['ARADUN_ATLAS_OWNER_SETUP'] -ne 'confirmed') { throw 'Wrong Atlas process-only arming' }
        } else {
            if ($this.StartInfo.EnvironmentVariables['APP_ENV'] -ne 'development' -or $this.StartInfo.EnvironmentVariables['ALLOW_LOCAL_STAFF_BOOTSTRAP'] -ne 'true') { throw 'Wrong process-only arming' }
            if ($this.StartInfo.EnvironmentVariables['DB_OPERATIONS_URI'] -ne 'mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0') { throw 'Wrong fixed target' }
        }
        return $true
    }
    $process | Add-Member ScriptMethod WaitForExit {}
    $process | Add-Member ScriptMethod Dispose {}
    return $process
}
& (Join-Path (Split-Path -Parent (Split-Path -Parent $PSScriptRoot)) 'scripts/setup-owner.ps1') -Atlas:$Atlas
if ($global:ownerPromptScenario -eq 'success') {
    if ($global:ownerPromptspawned -ne 1) { Write-Output ('Fixture diagnostic: '+$Error[0].Exception.GetType().Name+' at line '+$Error[0].InvocationInfo.ScriptLineNumber); throw 'Expected one delegate process' }
    $value = $global:ownerPromptcaptured | ConvertFrom-Json
    if ($value.input.password -cne $global:ownerPromptsynthetic -or $value.input.confirmedOwnerEmail -ne 'ahmadmusa@aradun.com') { throw 'Private stdin contract mismatch' }
    Write-Output 'FIXTURE_SUCCESS: secret reached stdin only; public receipt allowlisted.'
} elseif ($global:ownerPromptScenario -eq 'refused') {
    if ($global:ownerPromptspawned -ne 1) { throw 'Expected one refusal without retry' }
    Write-Output 'FIXTURE_REFUSED: no retry.'
} else {
    if ($global:ownerPromptspawned -ne 0) { throw 'Unexpected child process' }
    Write-Output 'FIXTURE_REJECTED: no delegate or database mutation.'
}
