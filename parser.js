const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const fs = require('fs');

fs.readFile('./test.xml', 'utf8', function(err, data) {
    if (!err) {
        // console.log(JSON.stringify(data));
        parser.parseString(data, function (err, result) {
          var json = JSON.stringify(result);
          console.log(json)
        });
    }
    console.log("HEllo");
});
