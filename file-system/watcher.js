const fs = require('fs');

fs.watch('target.txt', function() {
    console.log('File just changed!');
});
console.log("Now watching tartget.txt for changes...");