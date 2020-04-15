const fs = require('fs')
var read = function(fic){
    return new Promise(function(resolve,reject){
        fs.readFile(fic,'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
          })
    });
}

module.exports = {read};