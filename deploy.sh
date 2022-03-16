#!/bin/sh
npm run build
git checkout gh-pages
rm -rf docs
mv build docs
git add .
commit -m 'deploy'
git push
git checkout main