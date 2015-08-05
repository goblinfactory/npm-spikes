// build-concat.js
var concat = require('concat');
var path = require('path');

// argv first 2 arguments are 1) runner 2) full path to this script
var args = process.argv;
var outfile = args[args.length-1];
args.pop();
var srcfiles = args.slice(2);
console.log("outputfile:" + outfile);
console.log("files to concat:" + srcfiles);
concat(srcfiles, outfile, function() { console.log("concat -> " + outfile)});