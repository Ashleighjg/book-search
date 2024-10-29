const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
  }

    type Book {
    bookId: ID
    authors: [Authors]!
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID!, [Profile]!, image: String!, link: String!, title: String!, description: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
