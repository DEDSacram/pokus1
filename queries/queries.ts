import { gql } from '@apollo/client';

export const localesQuery = gql`
  query locales {
     locales
  }
`


export const ChangeName = gql`
mutation Update($name: String!){
  updateProfile(input:{name:$name}){
    name
  }
}
`

export const GetUsers = gql`
query GetUsers{
  users{
    name
  }
}
`

