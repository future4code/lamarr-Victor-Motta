import { Request, Response } from "express"
import { UserDataBase } from "../class/UserDataBase"
import connection from "../database/connection"


export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()

        const userDB=new UserDataBase(connection);
        const result = await userDB.getUsers();

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}