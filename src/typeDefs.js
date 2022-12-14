import { gql } from "apollo-server-express";

const usersAttribs = `
    id: ID
    nome: String!
    idade: String!
    playlists: [Playlist]
`
const usersAttribsInp = `
    id: ID
    nome: String!
    idade: String!
    playlists: input: [Playlist]
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
  input UserInput {
    ${usersAttribsInp}
  }
  input MusicInput {
    ${musicAttribs}
  }
  input PlaylistInput {
    ${playlistAttribs}
  }
  type Mutation {
    createUser(input: UserInput): User!
    updateUser(input: UserInput): User!
    deleteUser(input: UserInput): User!
    createMusic(input: MusicInput): Music!
    updateMusic(input: MusicInput): Music!
    deleteMusic(input: MusicInput): Music!
    createPlaylist(input: PlaylistInput): Playlist!
    updatePlaylist(input: PlaylistInput): Playlist!
    deletePlaylist(input: PlaylistInput): Playlist!
  }
`;
