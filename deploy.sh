# Update Browser List data
npx browserslist-ga
git add .
git commit -m "Update Browser List"

# Create release for Github
source .env
export GITHUB_TOKEN
release-it

# Complete
echo -e "\e[42mDeploy Script Complete!"