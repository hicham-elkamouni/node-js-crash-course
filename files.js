const fs = require('fs');

// reading files ( async function )
// fs.readFile('./docs/blog12.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'iwaa ya hameeeed', () => {
//     console.log('file was written 1');
// })

// fs.writeFile('./docs/blog2.txt', 'iwaa ya hameeeed', () => {
//     console.log('file was written 2');
// })

// directories

if (!fs.existsSync('./assets')) {
    
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })

}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    } )
}