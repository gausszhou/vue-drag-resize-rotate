rm -rf dist
npm run build
cd dist
git init 
git add .
time=$(date "+%Y-%m-%d-%H")
git commit -m "$time deploy"
git branch gh-pages
git checkout  gh-pages
# 部署到 github gh-pages /
git push -f git@github.com:gausszhou/vue-drag-resize-rotate.git gh-pages

cd -