@echo off
setlocal
set "ARADUN_NODE=%~dp0..\.tools\node-v24.22.2-win-x64"
if not exist "%ARADUN_NODE%\node.exe" (
  echo Portable Node 24.22.2 is absent. Install the pinned Node version and use npm directly.
  exit /b 1
)
set "PATH=%ARADUN_NODE%;%PATH%"
set "NEXT_TELEMETRY_DISABLED=1"
"%ARADUN_NODE%\node.exe" "%ARADUN_NODE%\node_modules\npm\bin\npm-cli.js" %*
exit /b %errorlevel%
