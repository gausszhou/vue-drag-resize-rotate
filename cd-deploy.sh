#!/usr/bin/env sh

rm -rf dist
npm run build
if [ ! -d "dist"]
then
echo "构建失败"
else
echo "构建成功"

cd dist

git init 
# 配置user
git config --local user.name "gausszhou"
git config --local user.email gausszhou@qq.com

git add .
time=$(date "+%Y-%m-%d-%H")
git commit -m "$time deploy"
git branch gh-pages
git checkout  gh-pages
# 部署到 github gh-pages /
git push  git@github.com:gausszhou/vue-drag-resize-rotate.git gh-pages -f

fi
cd -