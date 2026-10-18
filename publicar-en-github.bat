@echo off
chcp 65001 >nul
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI"
echo ============================================================================
echo   ACTUALIZANDO WEB 24/7 — NXMASTERS (https://boss-shifu.github.io/nxmasters/)
echo ============================================================================
for /f "delims=" %%i in ('gh auth token') do set TOKEN=%%i
git add -A
git commit -m "Update NXMASTERS Catalog"
git push "https://x-access-token:%TOKEN%@github.com/Boss-Shifu/nxmasters.git" main --force
echo.
echo [LISTO] Cambios publicados en https://boss-shifu.github.io/nxmasters/
pause
