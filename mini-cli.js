#!/usr/bin/env node

const { spawn } = require('child_process');
const { join, resolve } = require('path');
const { writeFileSync, readFileSync, statSync } = require('fs');

const { argv } = process;
const args = argv.slice(2);

const cwd = process.cwd();

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('-')) {
    switch (args[i]) {
      case '-sw':
      case '--service-worker':
        if (++i < args.length) {
          let file = resolve(cwd, args[i]);
          const stats = statSync(file, {throwIfNoEntry: false});
          if (stats && stats.isDirectory())
            file = resolve(file, 'mini-coi.js');
          writeFileSync(file, readFileSync(join(__dirname, 'mini-coi.js')));
          console.log(`Created mini-coi as \x1b[1m${file}\x1b[0m`);
          process.exit(0);
        }
        console.error(`Unknown path for \x1b[1m${args[--i]}\x1b[0m`);
        process.exit(1);
    }
  }
}

spawn(
  resolve(__dirname, '..', 'static-handler', 'static-handler.cjs'),
  ['--coi', ...args],
  {
    cwd,
    stdio: 'inherit',
  }
);
