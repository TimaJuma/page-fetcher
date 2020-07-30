const request = require('request');

const fs = require('fs');



let urls = process.argv.slice(2); 


const fileName = 'hello.html'


// the function gets URL and passes it to request and writes response body to index.html
request(`${urls[0]}${urls[1]}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  // const status = response && response.statusCode;

  const htmlBody = body;
  fs.writeFile(fileName, htmlBody, function(err) {
    if (err) return console.log(err);
    let size = getSize(fileName);
    console.log(`Downloaded and saved ${size} bytes to ./${fileName}`)

  })
  // console.log('statusCode:', response && response.statusCode); 
  // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});



//helper function get size of file
const getSize = function(fname) {
  let stats = fs.statSync(fname);
  let fileSize = stats['size'];
  return fileSize;
}