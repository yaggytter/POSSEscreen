#!/bin/bash -x

## Build
npm run build

## Patch for a Firestore issue for using commonjs mode.
## The issue is like https://github.com/firebase/firebase-js-sdk/issues/5823
# sed -i -e 's|__dirnameInESM, \\\"src/protos|__dirnameInESM, \\\"node_modules/@firebase/firestore/dist/src/protos|g' ./dist/main.js

## Start
npm start
