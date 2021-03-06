#!/usr/bin/env sh

npm run lib

npm publish

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A

git config user.name "seepine"
git config user.email "seepine@163.com"

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git remote add hg https://github.com/seepine/cleme.git
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f hg master:gh-pages

cd -
