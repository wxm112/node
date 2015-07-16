"use strict";
const 
    fs = require('fs'),
    filename = 'target.txt';

fs.open(filename, 'r', function(err, fd) {
    if(err) throw Error("No such a file")
});

fs.watch(filename, {persistent: true},function(e){
    if (e === "rename") {
        console.log(filename + " has been deleted")
    } else {
        console.log(filename + ' has been changed')
    }
});

console.log("Now watching tartget.txt for changes...");
