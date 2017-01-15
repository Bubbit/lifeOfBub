/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

// Documentation on what goes into PolymerProject.
const path = require('path');
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const del = require('del');
const polymerJsonPath = path.join(process.cwd(), 'polymer.json');
const polymerJSON = require(polymerJsonPath);
const polymer = require('polymer-build');
const polymerProject = new polymer.PolymerProject(polymerJSON);
const buildDirectory = 'build/bundled';

/**
 * Waits for the given ReadableStream
 */
function waitFor(stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

function build() {
  return new Promise((resolve, reject) => {
    console.log(`Deleting build/ directory...`);
    del([buildDirectory])
      .then(_ => {
        // Okay, now lets merge them into a single build stream.
        let buildStream = mergeStream(polymerProject.sources(), polymerProject.dependencies())
          .once('data', () => {
            console.log('Analyzing build dependencies...');
          });

        // If you want bundling, do some bundling! Explain why?
        buildStream = buildStream.pipe(polymerProject.bundler);

        // Okay, time to pipe to the build directory
        buildStream = buildStream.pipe(gulp.dest(buildDirectory));

        // waitFor the buildStream to complete
        return waitFor(buildStream);
      })
      .then(_ => {
        // You did it!
        console.log('Build complete!');
        resolve();
      });
  });
}

gulp.task('default', build);