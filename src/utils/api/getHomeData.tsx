import { gql, GraphQLClient } from "graphql-request";
import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";

interface Result {
  home: {
    title: string;
    text: string;
    metaTitle: string;
    metaDescription: string;
    subtitle: string;
    blocks: Blocks;
  };
}

export const document = gql`
  query Home {
    home {
      metaTitle
      metaDescription
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
            id
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
