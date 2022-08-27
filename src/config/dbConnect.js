import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:12345@livraria.nej88qu.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;