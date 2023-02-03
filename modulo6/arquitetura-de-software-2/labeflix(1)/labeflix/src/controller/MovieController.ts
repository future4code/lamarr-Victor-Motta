import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBussines";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { id, title, description, duration_in_minutes, year_of_release } = req.body;

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({ id, title, description, duration_in_minutes, year_of_release });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getMovies = async (req: Request, res: Response) => {
    try {

       const movieBusiness = new MovieBusiness()
       const movies = await movieBusiness.getMovies()

       res.status(201).send(movies)
    } catch (error: any) {
       res.status(400).send(error.message)
    }
 }
}
