import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
    query Query($page: Int) {
        episodes(page: $page) {
            info {
                pages
            }
            results {
                id
                name
                air_date
                episode
            }
        }
    }
`;

export type EpisodeType = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
};

export type GetEpisodesType = {
    episodes: {
        info: {
            pages: number;
        };
        results: EpisodeType[];
    };
};
