import { gql, GraphQLClient } from "graphql-request";

interface Result {
  home: {
    title: string;
    text: string;
    blocks: {
      __typename: string;
      title: string;
      content: string;
      description: string;
      id: string;
      variant: string;
      list: {
        description: string;
        size: string;
        title: string;
        sort: number;
        image: {
          url: string;
        };
      }[];
    }[];
  };
}

export const document = gql`
  query Home {
    home {
      text
      title
      blocks {
        ... on ComponentEvaKomiBigCenterText {
          __typename
          title
        }
        ... on ComponentEvaKomiServiceCards {
          __typename
          title
          description
          id
          variant
          list {
            description
            size
            title

            sort
            image {
              url
            }
          }
        }
        ... on ComponentEvaKomiText {
          __typename
          title
          content
        }
      }
    }
  }
`;

const endpoint = "https://cms.evakuator-service11.ru/graphql";
const client = new GraphQLClient(endpoint);

export async function getHomeData() {
  try {
    const data = await client.request<Result>(document);
    return data;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
}
