import cors from 'cors'
import {users} from "./data"
import express, {Request,Response} from 'express'
//----------- config inicial
const app = express()
app.use(express.json())
app.use(cors())

//-----------------ENDPOINT 1---------------
//Ex 1 
//a. Metodo GET
//b. A entidade "/user"

app.get('/user',(req:Request,res:Response)=>{

const allUser = users.map((i)=> {
    return i
}) 
res.status(201).send(allUser)})

//-----------------ENDPOINT 2-----------------
//a. Passamos via query
//b. Criando um enum
app.get('/searchUsers', (req:Request,res:Response)=>{
    let errorCode = 400

try {
// Pegar dados via query    
    const {type} = req.query

//Verfificar se os dados foram passados
    if ( !type ){
        errorCode = 422
            throw new Error("Informe o type para proseguir: ADMIN ou NORMAL (Em maiusculo por favor)"); 
    }

if(type !== "ADMIN" && type !== "NORMAL"){
    errorCode = 402
    throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
}
//Filtrar dados encontrados
const allUser = users.filter((i)=> {
    return i.type === type
}) 
res.status(201).send(allUser)

}

catch (error:any) {   
        res.status(errorCode).send(error.message)
    }
})
//--


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});