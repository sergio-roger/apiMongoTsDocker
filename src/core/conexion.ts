import mongoose from "mongoose";

export class Conexion {

	private mongo_host: string = '';
	private mongo_port: string = '';
	private mongo_user: string = '';
	private mongo_pass: string = '';
	private mongo_db: string = '';

	constructor() {
		this.mongo_host = `${process.env.MONGO_HOST}`;
		this.mongo_db = `${process.env.MONGO_DB}`;
		this.mongo_port = `${process.env.MONGO_PORT}`;
		this.mongo_user = `${process.env.MONGO_USER}`;
		this.mongo_pass = `${process.env.MONGO_PASS}`;
	 }

	connect(): Promise<typeof mongoose> {
		const uri: string = `mongodb://${this.mongo_user}:${this.mongo_pass}@${this.mongo_host}:${this.mongo_port}`;
    console.log(uri);
    const conexion = mongoose.connect(uri,{ dbName: this.mongo_db });
		return conexion;
	}
}
