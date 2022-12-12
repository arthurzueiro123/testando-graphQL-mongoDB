import mongoose from "mongoose";
//import { Music } from "./models/musica";
const { Music } = require('./models/musica.js').schema;

export const Playlist = mongoose.model("Playlist", { 
    nome: String , 
    id_usuario: Number,
    musicas: [Music]
});