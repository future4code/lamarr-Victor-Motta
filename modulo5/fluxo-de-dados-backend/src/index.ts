import express,{Request,Response} from "express"
import {data} from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//Ex 1
app.get("/test",(req:Request, res:Response)=>{
res.status(201).send( "Servidor rodando na porta (3003)!")
})
//Ex 2
//Criado o arquivo data.ts

//Ex 3 
//Criado o arquivo type.ts 

//Ex 4
app.post("/add-data-list",(req:Request, res:Response)=>{
    const addName = req.body.name;
    const addPrice = req.body.price;
   
    data.push({
        id:Date.now().toString(),
        name:addName,
        price:addPrice
    })
    
    res.status(201).send(data)
    })



//Ex 5
//Endpoint da lista completa
app.get("/data-list",(req:Request, res:Response)=>{
    const dataList = data.map((i)=>{
        return i
    })
    res.status(201).send(dataList)
    })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

