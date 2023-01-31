# -------------- Ex Intro Auth -------------//


## Ex1
# a) Sim, pois quando adicionamos uma string, podemos adicionar tanto numeros quanto carcateres, tornando a possibilidade de gerar senhas unicas maior.

# b)
import { v4 } from "uuid";

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}

## Ex2
# a) Pois estamos tipando o id, tornando ele obrigatoriamente uma string.

# b) 
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/user";

export class Authenticator {
    public generateToken = ({ id }: AuthenticationData): string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        )
        return token
    }
## Ex3
# Realizadas alteracoes e validacoes diretamente no cod do endpoint.

## Ex4
 public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select("*").where({email})
      
      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}

## Ex 5
# Realizadas alteracoes e validacoes diretamente no cod do endpoint.
  getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload
        } catch (error:any) {
            console.log(error.message)
            throw new Unauthorized()
        }
       
    }
}

