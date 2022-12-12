import mongoose from "mongoose";

const musicSchema = { 
    nome: String , 
    artista: String
}

export const Music = mongoose.model("Music", musicSchema );