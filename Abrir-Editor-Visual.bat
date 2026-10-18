@echo off
chcp 65001 >nul
set "PATH=%PATH%;C:\Program Files\GitHub CLI"
for /f "delims=" %%i in ('gh auth token') do set TOKEN=%%i
start "" "https://boss-shifu.github.io/nxmasters/admin.html#token=%TOKEN%"
