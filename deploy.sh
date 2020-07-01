#!/usr/bin/env sh
set -e
echo building...
sh build.sh
echo building-complete.

cd docs/.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git remote add origin https://github.com/tangzhiyu/blog.git
git pull
git push --force origin HEAD:gh-pages

REM To delete the dist folder
# 退回开始所在目录
cd -
rm -rf docs/.vuepress/dist
cd -
echo Auto-Deploy-Complete!
