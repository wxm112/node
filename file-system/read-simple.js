const 
    fs = require('fs'),
    data = fs.readFileSync('target.txt');
process.stdout.write(data.toString());
// fs.readFile('target.txt', function(err, data){
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString());
// });