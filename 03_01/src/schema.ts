import { gql } from "apollo-server-express";


const Schema = gql`
type Car {
  id: ID!,
  carType: String!,
  color: String!
  year: Int!
}

type Query {
  getCars: [Car!]!
}

type Mutation {
 addCars(carType: String!, color: String!, year: Int!) : Car!
}
`;

export default Schema;


