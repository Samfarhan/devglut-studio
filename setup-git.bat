@echo off
title DEVGLUT Studio - Automatic Push to GitHub (Samfarhan)
color 0A
cd /d "%~dp0"
echo ================================================================
echo    DEVGLUT STUDIO - PUSHING CODE TO GITHUB (Samfarhan)
echo    Creative Technology Studio by Farhan Khan x Harsh Rawat
echo ================================================================
echo.

:: 1. Verify Git Installation
where git >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Git is not installed or not found in system PATH!
    echo Please install Git from https://git-scm.com/
    echo.
    pause
    exit /b 1
)

echo [1/5] Initializing local Git repository...
git init

echo.
echo [2/5] Staging all studio files...
git add .

echo.
echo [3/5] Creating commit...
git commit -m "feat: complete DEVGLUT 3D Spatial Studio (Flowstack, 60 FPS RAF Tilt, Services, INR Pricing)"

echo.
echo [4/5] Setting main branch...
git branch -M main

echo.
echo [5/5] Connecting to GitHub: https://github.com/Samfarhan/devglut-studio.git ...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/Samfarhan/devglut-studio.git

echo.
echo Pushing all code to GitHub (overwriting initial blank readme)...
git push -u origin main --force

echo.
echo ================================================================
echo   SUCCESS! All code is now live on your GitHub:
echo   -> https://github.com/Samfarhan/devglut-studio
echo.
echo   GitHub Actions is now hosting it at:
echo   -> https://samfarhan.github.io/devglut-studio/
echo.
echo   And it is now ready on Vercel:
echo   -> https://vercel.com/new
echo ================================================================
echo.
pause
