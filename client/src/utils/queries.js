import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    user {
      _id
      userName
      email
      bookCount
      savedBooks {
        bookId
        description
        title
        link
        authors {
          name
        }
      }
    }
  }
`;
