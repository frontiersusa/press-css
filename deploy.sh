# Update Browser List data
npx browserslist-ga
git add .
git commit -m "Update Browser List"

# Create release for Github
source .env
export GITHUB_TOKEN
release-it

# Complete
echo -e "Deploying 'docs' directory to 'gh-pages' branch."

git push origin `git subtree split --prefix docs master`:gh-pages --force