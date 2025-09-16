import { gql, GraphQLClient } from "graphql-request";
import { Blocks } from "@/shared/components/BlockConstructor/BlockConstructor";

interface Result {
  services: {
    title: string;
    subTitle: string;
    metaTitle: string;
    metaDescription: string;
    interactiveText: string;
    blocks: Blocks;
  }[];
}

export const document = gql`
  query ServiceDetail ($slug: String) {
    services (filters: {
      slug: {
        eq: $slug
      }
    }) {
      title
      subTitle
      metaTitle
      metaDescription
      interactiveText
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

export async function getDetailedServicesData(slug: string) {
  try {
    const data = await client.request<Result>(document, { slug });
    return data;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
}
