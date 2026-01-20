@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"

echo Installing dependencies...
call npm.cmd install
if %ERRORLEVEL% NEQ 0 (
    echo Error installing dependencies
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Starting development server...
call npm.cmd run dev
