set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:vit4ly/new-test-cmtt.git master:gh-pages

cd -