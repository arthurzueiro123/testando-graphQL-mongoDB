import mongoose from "mongoose";

const musicSchema = { 
    nome: String , 
    artista: String
};
const playlistSchema = { 
    nome: String , 
    id_usuario: Number,
    musicas: [musicSchema]
};
const userSchema = { 
    nome: String , 
    idade: Number,
    playlists: [playlistSchema]
};

const Music = mongoose.model("Music",musicSchema);

const Playlist = mongoose.model("Playlist", playlistSchema);

const User = mongoose.model("User", userSchema);

module.exports = {Music,Playlist,User}