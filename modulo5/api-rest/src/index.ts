import cors from 'cors'
import {users} from "./data"
import express, {Request,Response} from 'express'
import { User } from './type'
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
//a. Passei via headers
//b. Criando um enum
app.get('/searchUsers', (req:Request,res:Response)=>{
    let errorCode = 400

try {
// Pegar dados via query    
    const type = req.headers.type

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
//--------------------ENDPOINT 3-----------------------
app.get('/users/:name',(req:Request, res:Response)=>{
 let errorCode = 400
//Dado via params
const userName = req.params.name as string
try{
//verificar se o dado foi passado
if (!userName){
    errorCode = 422
    throw new Error("Falta o parametro name");
    
}
// Procurar no banco de dados
const userSearchByName = users.find((user)=>{
return user.name === userName
})

// Tratar o erro - validacao
if (!userSearchByName){
    errorCode = 404
    throw new Error("Nome nao encontrado no banco de dados");
    
}
// Mostrar usuario
res.status(200).send(userSearchByName)
}
catch(error:any) {
    // 6. Mostrar o erro especifico com a mensagem
    res.status(errorCode).send(error.message)
}
})

//---------ENDPOINT 4---------------------
app.post('/users/',(req:Request, res:Response)=>{
 let errorCode = 400
try{
// Pegar dados via body
const {name, email,type,age} = req.body

// Verifi se dados foram passados
if (!name || !email || !type || !age){
    errorCode = 422
        throw new Error("Falta passar parametros: nome, email, tipo, idade");
}
// Criacao de dados enviados
const newUser : User ={
    id : Math.random(),
    name :name,
    email: email,
    type: type.toUpperCase(),
    age : age
 }
 users.push(newUser)
 res.status(201).send(users)
    }


catch(error:any) {
    // 7. Mostrar a mensagem de erro e o código do erro 
    res.status(errorCode).send(error.message)
}})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});