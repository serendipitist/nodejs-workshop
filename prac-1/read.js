var fs = require('fs');

fs.readFile('file.json', function (err, data) {
    console.log (data.toString());
});