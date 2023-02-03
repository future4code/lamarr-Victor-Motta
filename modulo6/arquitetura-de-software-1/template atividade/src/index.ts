import {app} from "./app"
import { UserController } from "./controller/userController"



app.get("/test", async function(){
   console.log("endpoint teste")
})

const userController = new UserController()

app.post("/createUser", userController.createUser)