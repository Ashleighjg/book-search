import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook( 
    $bookId: ID!
    $authors: [String]!
    $image: String!
    $link: String!
    $title: String! 
    $description: String!) {
    saveBook(bookId: ID!, authors: [String]!, image: String!, link: String!, title: String!, description: String!) {
        {
        _id
        }
      }
    }
  }
`;



export const REMOVE_BOOK = gql`
  mutation removeBook (bookId: ID!){
  removeBook (bookId: ID!){
    _id
  }
  }
    
`;