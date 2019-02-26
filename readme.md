# PRESS CSS

Styles for Frontiers properties.

## Using in other projects

1. `cd` into your project directory and `npm i @frontiersusa/press-css`.
2. Copy `tailwind.js` to your project's root or reference it in your project

## CSS Support

- Official support for >1% of Frontiers USA browser stats.
- Basic support for IE 10 & 11
- IE 9 and earlier are not supported

## Maintaining this repository

This section is for maintainers only.

### Local Setup

1. Run `git clone https://github.com/frontiersusa/press-css.git` to clone locally.
2. `cd` into the cloned directory and `npm install`.
3. `npm run start` to serve and watch

### Building

Run `npm run build` to build locally, though this will be done automatically done during [deployment](#deployment).

### Editing

This project uses [Tailwindcss](https://github.com/tailwindcss/tailwindcss) to generate all styles. Please read Tailwind's documentation carefully before making edits.

### Deployment

Press CSS uses a simple script ([deploy.sh](https://github.com/frontiersusa/press-css/blob/master/deploy.sh)) to deploy to this repository. It does the following:

1. Updates [browserslist-stats.json](https://github.com/frontiersusa/press-css/blob/master/browserslist-stats.json). This will open your browser and ask for access to the Google Analytics account for Frontiers USA.
2. Bumps the current version using [release-it](https://github.com/webpro/release-it#readme).
3. Deploys to the repository and creates a new release (done with [release-it](https://github.com/webpro/release-it#readme)).
4. Deploys `/docs` directory to branch `gh-pages`.
