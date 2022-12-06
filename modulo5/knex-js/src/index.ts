import express, { Request, Response} from "express"
import knex from "knex";
import cors from 'cors'
import dotenv from "dotenv";
import connection from "./connetions";
import { isNamedExportBindings } from "typescript";

const app = express()
dotenv.config();

app.use(express.json())
app.use(cors())

//Ex1 a) Ao usar o raw, enviamos uma query para o banco de dados, utilizando a linguagem sql sem ter q abrir o programa Mysql

//b) Funcao que busca por nome

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result [0]
  }
  (async () => {
    console.log(await searchActor("Jade Picon") )
  })()

//c) Funcao que busca por genero

const searchActorGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    return count;
  }
  (async () => {
    console.log(await searchActorGender("Female") )
  })(),
  (async () => {
    console.log(await searchActorGender("Male") )
  })()

//2 a)
const updateSalary = async (
    salary: number,
    id: string,
): Promise<any> =>{
    await connection ("Actor")
    .update({
 salary:salary,
    })
    .where("id",id);
}
(async () => {
    console.log(await updateSalary(20,"003"))
  })()
  ;

  //b)
//   const deleteActor = async (id: string): Promise<void> => {
//     await connection("Actor")
//       .delete()
//       .where("id", id);
//   }; 
//   (async () => {
//     console.log(await deleteActor("002"))
//   })()
//   ;


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});