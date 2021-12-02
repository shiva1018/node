const fs=require('fs') //inbulit package fs-file system-{C drive,D drive,F drive} 
const { request } = require('http')
const { append } = require('vary')
// fs.readFile("./welcome.txt",'utf-8',(error,data)=>{
//     console.log(data)
// }) 
//  const  quote="lonely !!!"
//  const add="\nhappy"
// fs.appendFile('./awesome.txt',add,(error)=>{
//     console.log("completed writing")
// })
//how to deletefile
fs.unlink('./awesome.txt',error=>{
    console.log("deleting files")
})
fs.readdir('./backup3',(error,files)=>{
    if(error){
        console.log(error)
    }
    console.log(files)
})
//  const quote2="live more,worry lEss!!"
// fs.writeFile('./text-1.html',quote2,(error)=>{
//     console.log("writing completed")
// })

//creat below .html files same content quote2
//task-1
//text-1.html,
//text-2.html,
//...
//text-10.html

//part-2
//get no.of.files to be created from users
const quote2="live more,worry lEss!!"

function Createdfiles(nooffiles,quote){
for(i=1;i<=nooffiles;i++){
    fs.writeFile(`./backup/text-${i}`,quote,(err)=>{
        console.log("completed writing",i)
    })
}
}
const  [ , ,nooffiles]=process.argv;
Createdfiles(nooffiles,quote2)

//harddisk
//libary
// 1 2 3 4
// 5 6 7 8
//disk fragmentation -its clear empty spaces 


// express npm frame on node
//react is a libary
//angular is frameworknpm 

//movies

append.get("./movies",(request,re))