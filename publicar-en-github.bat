@echo off
chcp 65001 >nul
echo ============================================================================
echo   PUBLICADOR AUTOMATICO 24/7 — NXMASTERS (GitHub Pages)
echo ============================================================================
echo.
set /p REPO_URL="Pega aqui el link de tu repositorio de GitHub (ej. https://github.com/TuUsuario/nxmasters.git): "
if "%REPO_URL%"=="" (
    echo [ERROR] No ingresaste ningun link.
    pause
    exit /b 1
)

git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git add .
git commit -m "Update NXMASTERS Web Catalog" >nul 2>&1
git branch -M main
echo.
echo Subiendo archivos a GitHub...
git push -u origin main --force

echo.
echo [LISTO] Tu pagina ya esta en GitHub!
echo En la pestaña Settings ^> Pages de tu repositorio, selecciona Source: "GitHub Actions" o "Deploy from a branch (main)" y tu web estara viva 24/7 aunque apagues tu PC.
pause
