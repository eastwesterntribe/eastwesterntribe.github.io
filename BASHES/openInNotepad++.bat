#!/bin/bash
cd ..
for /r %%i in ("*.html", "*.css", "*.js") do start notepad++ %%i
exit