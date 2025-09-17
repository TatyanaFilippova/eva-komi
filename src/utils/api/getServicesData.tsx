import { gql, GraphQLClient } from "graphql-request";
import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";

interface Result {
  servicesBreeding: {
    title: string;
    text: string;
    metaTitle: string;
    metaDescription: string;
    subtitle: string;
    blocks: Blocks;
  };
}

export const document = gql`
  query Services {
    servicesBreeding {
      text
      subtitle
      metaTitle
      metaDescription
      title
      blocks {
        ... on ComponentEvaKomiBigCenterText {
          __typename
          title
          id
        }
        ... on ComponentEvaKomiServiceCards {
          __typename
          title
          description
          id
          variant
          list {
            id
            description
            size
            title
            link
            sort
            image {
              url
            }
          }
        }
        ... on ComponentEvaKomiText {
          __typename
          title
          id
          content
        }
      }
    }
  }
`;

const endpoint = "https://cms.evakuator-service11.ru/graphql";
const client = new GraphQLClient(endpoint);

export async function getServicesData() {
  try {
    const data = await client.request<Result>(document);
    return data;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
}
