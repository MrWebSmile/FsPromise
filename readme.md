# FsPromise

FsPromise is a FS library that use promises.

## Example

```javascipt
const fsPromise = require('@smileweb/fspromise')
fsPromise.read(__dirname+'/refOrder.json')
.then(function(data){
    var dataJson = JSON.parse(data);
    console.log(dataJson.serviceItems);
})

