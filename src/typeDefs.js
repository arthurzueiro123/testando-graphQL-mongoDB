import { gql } from "apollo-server-express";

const usersAttribs = `
    id: ID
    nome: String!
    idade: Number!
    playlists: [Playlist]
`
const musicAttribs = `
    id: ID
    nome: String!
    artista: String!
`
const playlistAttribs = `
    id: ID
    nome: String!
    musicas: [Music]
`

// export const typeDefs = gql`
//   type Query {
//     hello: String!
//     cats: [Cat!]!
//   }

//   type Cat {
//     id: ID!
//     name: String!
//   }

//   type Mutation {
//     createCat(name: String!): Cat!
//   }
// `;

export const typeDefs = gql`
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
    getMusic(id: ID!): Music
    getMusics: [Music]
    getPlaylist(id: ID!): Playlist
    getPlaylists: [Playlist]
  }

  type User {
    ${usersAttribs}
  }

  type Music {
    ${musicAttribs}
  }

  type Playlist{
    ${playlistAttribs}
  }
  type Mutation {
    createUser(nome: String!, idade: Number!, playlists: [Playlist]): User!
    updateUser(id: ID!, nome: String!, idade: Number!, playlists: [Playlist]): User!
    deleteUser(id: ID!): User!

    createMusic(nome: String!, artista: String!): Music!
    updateMusic(id: ID!, nome: String!, artista: String!): Music!
    deleteMusic(id: ID!): Music!

    createPlaylist(nome: String!, musicas: [Music!]): Playlist!
    updatePlaylist(id: ID!, nome: String!, musicas: [Music!]): Playlist!
    deletePlaylist(id: ID!): Playlist!
  }
`;
