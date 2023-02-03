import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({  title, description,duration_in_minutes,year_of_release }: any):Promise<void> {
    if ( !title || !description|| !duration_in_minutes|| !year_of_release) {
      throw new Error("Dados inválidos ")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release
    })
    
  }

  public getMovies = async () => {
    //instanciiar fora do try  
    try {
       const movieDatabase = new MovieDatabase()
       
       return await movieDatabase.getMovies();
       
    } catch (error: any) {
       throw new Error(error.message)
    }
 }

}
