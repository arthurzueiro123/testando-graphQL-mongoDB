import mongoose from "mongoose";
import { Playlist } from "./models/playlist";

export const User = mongoose.model("User", { 
    nome: String , 
    idade: Number,
    playlists: [Playlist]
});