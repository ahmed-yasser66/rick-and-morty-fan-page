import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query GetCharacters {
characters {
    results {
    id
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
}
`;
export type Character = {
    id: string;
    name: string;
    image: string;
    species: string;
    status: string;
    origin: {
        name: string;
        dimension: string;
    };
};
export type GetCharactersType = {
    characters: {
        results: Character[];
    };
};
