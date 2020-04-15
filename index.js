const fs = require('fs')
/*
* @PARAMS file string : File's name or path
* @RETURN Promise
*/
let read = function(file){
    return new Promise(function(resolve,reject){
        fs.readFile(file,'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
          })
    });
}
/*
* @PARAMS file string: File's name or path
* @PARAMS data string or buffer : data's that fill the file
* @RETURNS Promise
*/
let write = function(fic,data){
    return new Promise(function(resolve,reject){

        fs.writeFile(fic,data, (err) => {
            if (err) reject(err);
            resolve('done');
            
        });
 
    });
}

module.exports = {read,write};