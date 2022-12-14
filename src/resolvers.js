import { Cat } from "./models/Cat";
import { Music } from "./models/allModels";
import { Playlist } from "./models/allModels";
import { User } from "./models/allModels";

// export const resolvers = {
//   Query: {
//     hello: () => "hi",
//     cats: () => Cat.find()
//   },
//   Mutation: {
//     createCat: async (_, { name }) => {
//       const kitty = new Cat({ name });
//       await kitty.save();
//       return kitty;
//     }
//   }
// };

export const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id)
    },
    getUsers: () => User.find(),
    getMusic: async (_, { id }) => {
      return await Music.findById(id)
    },
    getMusics:() => Music.find(),
    getPlaylist: async (_, { id }) => {
      return await Playlist.findById(id)
    },
    getPlaylists: () => Playlist.find()
  },
  Mutation: {
    createUser: async (_, { nome, idade, playlist }) => {
      const usuario = new User({ nome, idade, playlist });
      await usuario.save();
      return usuario;
    },
    updateUser: async (_, {id, nome, idade, playlist }) => {
      return await User.findOneAndUpdate(id,{ nome, idade, playlist })
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id)
    },
    createMusic: async (_, { nome, artista }) => {
      const musica = new Music({ nome, artista });
      await musica.save();
      return musica;
    },
    updateMusic: async (_, {id, nome, artista }) => {
      return await Music.findOneAndUpdatee(id,{ nome, artista })
    },
    deleteMusic: async (_, { id }) => {
      return await Music.findByIdAndDelete(id)
    },
    createPlaylist: async (_, { nome, musicas }) => {
      const playlist = new Playlist({ nome, musicas });
      await playlist.save();
      return playlist;
    },
    updatePlaylist: async (_, {id, nome, musicas }) => {
      return await Playlist.findOneAndUpdate(id,{ nome, musicas })
    },
    deletePlaylist: async (_, { id }) => {
      return await Playlist.findByIdAndDelete(id)
    }
  }
};