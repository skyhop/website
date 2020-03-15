# abort on errors
$ErrorActionPreference = "Stop"

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo "skyhop.org" > CNAME
Set-Content -Path CNAME -Value "skyhop.org"

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/skyhop/website.git master:gh-pages