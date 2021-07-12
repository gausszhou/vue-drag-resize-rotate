rm -rf dist
npm run build
if [ ! -d "dist"]
then
echo "构建失败"
else
echo "构建成功"
cd dist
git init 
git add .
time=$(date "+%Y-%m-%d-%H")
git commit -m "$time deploy"
git branch gh-pages
git checkout  gh-pages
# 部署到 github gh-pages /
git push  git@github.com:gausszhou/vdrr.vue.git gh-pages -f
fi
cd -