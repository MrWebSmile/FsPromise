# FsPromise

FsPromise is a FS library that use promises.

## Example `read(path)`


    const fsPromise = require('@smileweb/fspromise')
    let file = __dirname+'/refOrder.json';
    fsPromise.read(file).then(function(data){
       var dataJson = JSON.parse(data);
       console.log(dataJson.serviceItems);
    })

The variable 'file' is the PATH or URL of the file as you need. 

## Example `write(path,data)`


    const fsPromise = require('@smileweb/fspromise');
    let file = __dirname+'/conf.json';
    let data = 'Hello World !';
    fsPromise.write(file,data)
    .then((response)=>{
       console.log(`Response: ${response}`);
    });

