import { Knex } from "knex";
import { Purchase } from "./Purchase";

export class PurchaseDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertPurchase=async(newPurchase:Purchase)=>{
       await this.connection("Labe_Purchases").insert(newPurchase);
    }
    public getPurchase=async()=>{
       const result= await this.connection("Labe_Purchases").select();
       return result;
    }
    
}