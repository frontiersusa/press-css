echo -e "\n\e[32mUpdating Browser List. Opening a browser window to continue."
# Update Browser List data
npx browserslist-ga
git add .
git commit -m "Update Browser List"

echo -e "\n\e[32mReleasing a new version."
# Create release for Github
source .env
export GITHUB_TOKEN
release-it

# Complete
echo -e "\n\e[32mDeploying 'docs' directory to 'gh-pages' branch."
git push origin `git subtree split --prefix docs master`:gh-pages --force