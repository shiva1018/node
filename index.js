// const { response } = require('express');
import express, { request, response } from "express";  //(latest syntax) mongodb
import { MongoClient } from "mongodb";
// const express=require('express');
// const { request } = require('http');
 
const app=express();

    
    app.use(express.json())// every request in the body parse as json -inbuiltmiddleware 
const MONGO_URL="mongodb://localhost";


    async function createconnection(){
        const client=new MongoClient(MONGO_URL)
       await client.connect(); //(promise)
       console.log("mongodb connected")
       return client;
    }
    const client= await createconnection()  //use it anywhere
   
const PORT=9000;
app.get("/",(request,response)=>{

   
    response.send("Hlooo worldcccc!!!")
});
app.post("/movies", async(request,response)=>{ //insertmovies
    const data=request.body;

    const result=await client
    .db("b28wd")
    .collection("movies")
    .insertMany(data)
 response.send(result)
})
//four problem solve,movies only,rating,lanuage,all three working
app.get("/movies",async(request,response)=>{
    console.log(request.query)
    const filter=request.query;
    console.log(filter)
//  console.log(language,rating)
if(filter.rating){
     filter.rating=parseInt(filter.rating)

}

const filtermovies= await client
.db("b28wd")
.collection("movies")
.find(filter)
.toArray();
// console.log(filtermovies)
    response.send(filtermovies)
})


// app.get("/movies",(request,response)=>{
//     response.send(movies)
// });

app.get("/movies/:id", async(request,response)=>{
    console.log(request.params)
    const {id}=request.params;
    //db.movie.fineOne({id:"100"})
    const movie= 
    await client
    .db("b28wd")
    .collection("movies")
    .findOne({id: id})
 console.log(movie)
    response.send(movie)
    movie ? response.send(movie) : response.status(404).send({message:"no matching found"});
});

app.listen(PORT, ()=> console.log("app started in",PORT))