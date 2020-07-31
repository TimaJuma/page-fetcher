const request = require('request');
const fs = require('fs');



const website = process.argv.slice(2)[0]; //website = string
const path = process.argv.slice(3)[0];  //file storage path = string



// the function gets URL and passes it to request and writes response body to index.html
request(website, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  const status = response && response.statusCode;

  const htmlBody = body;
  fs.writeFile(path, htmlBody, function(err) {
    if (err) return console.log(err);
    let size = getSize(fileName);
    console.log(`Downloaded and saved ${size} bytes to ./${path}`)

  })

});



//helper function get size of file
const getSize = function(fname) {
  let stats = fs.statSync(fname);
  let fileSize = stats['size'];
  return fileSize;
}

