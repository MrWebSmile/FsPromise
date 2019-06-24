const fs = require('fs')
var fsPromise = function(){}
fsPromise.prototype.read = function(fic){
    return new Promise(function(resolve,reject){
        fs.readFile(fic,'utf8', (err, data) => {
            if (err) reject(err);
            //console.log(data);
            dataJson = JSON.parse(data);
            resolve(dataJson);
          })
    });
}

module.exports = {fs_promise:fsPromise};
