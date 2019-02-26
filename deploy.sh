# Update Browser List data
echo -e "\n\e[32mUpdating Browser List. Opening a browser window to continue."
npx browserslist-ga
git add .
git commit -m "Update Browser List"

# Create release for Github
echo -e "\n\e[32mReleasing a new version."
source .env
export GITHUB_TOKEN
release-it

# Deploy to gh-pages
echo -e "\n\e[32mDeploying 'docs' directory to 'gh-pages' branch."
git push origin `git subtree split --prefix docs master`:gh-pages --force

# Complete
echo -e "\n\e[32mDeploy script complete."