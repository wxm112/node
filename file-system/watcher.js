var fs = require('fs');
fs.watch('target.txt', function(){
    console.log("File 'target.txt' just changed!");
});
console.log("Now watching tartget.txt for changes...");