import { gql } from "@apollo/client";

export const GET_SINGLE_CHARACTER = gql`
  query GetSingleCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      species
      status
      origin {
        name
        dimension
      }
    }
  }
`;

export type GetSingleCharacterType = {
  character: {
    name: string;
    image: string;
    species: string;
    status: string;
    origin: {
      name: string;
      dimension: string | null;
    } | null;
  } | null;
};
