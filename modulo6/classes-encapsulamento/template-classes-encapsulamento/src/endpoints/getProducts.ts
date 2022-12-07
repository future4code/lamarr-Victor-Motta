import { Request, Response } from "express"
import { ProductDataBase } from "../class/ProductDataBase"
import connection from "../database/connection"


export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_PRODUCTS).select()

        const productsDB = new ProductDataBase(connection);
        const result = await productsDB.getProducts();

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}