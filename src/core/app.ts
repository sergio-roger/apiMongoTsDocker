import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { Conexion } from './conexion';
import { router } from './router';
import morgan from 'morgan';

export class App {

	private app: Express = express();
	private port = process.env.PORT;
  private conexion!: Conexion;

	constructor() {
		this.app.use(cors());
    this.app.use(morgan('dev'))
		this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.conectBd();
		this.app.use(router);
	}

	start(): void {
    this.app.get('/', (req: Request, res: Response) => {
			res.send('Express + TypeScript Server');
		});

		this.app.listen(this.port, () => {
			console.log(`⚡️[server]: Server is running at http://localhost:${this.port}/`);
		});
	}

  private conectBd(): void {
    this.conexion = new Conexion();
    this.conexion.connect()
    .then(() => {
      console.log("Conexion to bd");
    }, (error) => {
      console.log("Error to connect ", error);
    });
  }
}
