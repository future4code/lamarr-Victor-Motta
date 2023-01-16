import { Request, Response } from "express"
import { Product } from "../class/Product"
import { ProductDataBase } from "../class/ProductDataBase"
import connection from "../database/connection"


export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        // await connection(TABLE_PRODUCTS).insert({
        //     id: newProduct.id,
        //     name: newProduct.name,
        //     price: newProduct.price
        // })
       const id = Date.now().toString();
        const newProduct=new Product(id,name, price)
        const productDB=new ProductDataBase(connection);
        productDB.insertProduct(newProduct);

        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}