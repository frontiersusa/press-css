# Create release for Github
echo "\n 🚀  Releasing a new version."
source .env
export GITHUB_TOKEN
release-it --no-git.requireCleanWorkingDir

# Complete
echo "\n ✅  Deploy script complete."