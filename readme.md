# PRESS CSS

Styles for Frontiers properties.

## Using in other projects

`cd` into your project directory and `npm i frontiersusa/press-css`.

## CSS Support

- Official support for >1% of Frontiers USA browser stats.
- Basic support for IE 10 & 11
- IE 9 and earlier are not supported

## Maintaining this repository

This section is for maintainers only.

### Getting Set Up

1. Clone this repository
2. `cd` into the directory and `npm install`

### Editing

This project uses [tailwindcss](https://github.com/tailwindcss/tailwindcss) to generate all styles. Please read Tailwind's documentation carefully before making edits.

### Deployment

Press CSS uses a simple script ([deploy.sh](https://github.com/frontiersusa/press-css/blob/master/deploy.sh)) to deploy to this repository. It does the following:

1. Updates [browserslist-stats.json](https://github.com/frontiersusa/press-css/blob/master/browserslist-stats.json). This will open the browser and ask for access to the Google Analytics account for Frontiers USA.
2. Bumps the current version using [release-it](https://github.com/webpro/release-it#readme).
3. After bumping, [release-it](https://github.com/webpro/release-it#readme) will also deploy to this repo while being able to create a new release.
