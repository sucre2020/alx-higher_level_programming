#!/usr/bin/node

const fs = require('fs');
const path = require('path');

const [sourceFile1, sourceFile2, destFile] = process.argv.slice(2);

const source1Stream = fs.createReadStream(sourceFile1, { encoding: 'utf8' });
const source2Stream = fs.createReadStream(sourceFile2, { encoding: 'utf8' });
const destStream = fs.createWriteStream(destFile, { encoding: 'utf8' });

source1Stream.pipe(destStream, { end: false });
source1Stream.on('end', () => {
  destStream.write('\n');
  source2Stream.pipe(destStream);
});

source1Stream.on('error', (err) => {
  console.error(`Error reading source file ${sourceFile1}: ${err.message}`);
});

source2Stream.on('error', (err) => {
  console.error(`Error reading source file ${sourceFile2}: ${err.message}`);
});

destStream.on('error', (err) => {
  console.error(`Error writing to destination file ${destFile}: ${err.message}`);
});

