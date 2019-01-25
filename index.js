#!/usr/bin/env node

function execute(command) {
  const exec = require("child_process").exec;

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout);
  });
}

execute(
  "npm i -D tailwindcss frontiersusa/press-css#v5.0.0 && npm i -g copyfiles"
);
execute('copyfiles "./node_modules/press-css/tailwind.js" "./" -f  -E -V');
execute(
  'copyfiles "./node_modules/press-css/src/press-example.css" "./" -f  -E -V'
);
