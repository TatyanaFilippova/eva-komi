"use client";
import ServiceCards from "@/shared/components/ServiceCards/ServiceCards/ServiceCards";
import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";
import Benefits from "@/shared/components/Benefits/Benefits";
import EvacuationСards from "@/shared/components/EvacuationСards/EvacuationСards/EvacuationСards";
import BlockTextServices from "@/shared/components/BlockTextServices/BlockTextServices";

export type BlockListItem = {
  title: string;
  description: string;
  image: { url: string };
  size?: string;
  link?: string | null;
};

export type Block =
  | {
      __typename: "ComponentEvaKomiText";
      title: string;
      content: string;
    }
  | {
      __typename: "ComponentEvaKomiBigCenterText";
      title: string;
    }
  | {
      __typename: "ComponentEvaKomiServiceCards";
      title: string;
      description?: string;
      variant: string;
      list: BlockListItem[];
    };

export type Blocks = Block[];

interface BlockConstructorProps {
  blocks: Blocks;
}

const BlockConstructor = ({ blocks }: BlockConstructorProps) => (
  <div>
    {blocks.map((item, index) => {
      if (
        item.__typename === "ComponentEvaKomiServiceCards" &&
        item.variant === "services"
      ) {
        return (
          <ServiceCards
            key={index}
            title={item.title}
            description={item.description ?? ""}
            listCards={item.list.map((card) => ({
              titleCard: card.title,
              descriptionCard: card.description,
              size: card.size?.toUpperCase() ?? "M",
              imageCard: card.image.url,
              link: card.link ?? undefined,
            }))}
          />
        );
      }
      if (item.__typename === "ComponentEvaKomiText") {
        return (
          <DescriptionHorizontal
            key={index}
            title={item.title}
            listTextHorizontal={item.content}
          />
        );
      }
      if (
        item.__typename === "ComponentEvaKomiServiceCards" &&
        item.variant === "advantages"
      ) {
        return (
          <Benefits
            key={index}
            title={item.title}
            description={item.description ?? ""}
            listBenefits={item.list.map((card) => {
              return {
                titleCard: card.title,
                descriptionCard: card.description,
                imageCard: card.image.url,
              };
            })}
          />
        );
      }
      if (
        item.__typename === "ComponentEvaKomiServiceCards" &&
        item.variant === "services_transparent"
      ) {
        return (
          <EvacuationСards
            key={index}
            title={item.title}
            description={item.description ?? ""}
            listEvacuationCards={item.list.map((card) => ({
              titleCard: card.title,
              descriptionCard: card.description,
              link: card.link ?? "#CallTruck",
              imageCard: card.image.url,
            }))}
          />
        );
      }
      if (item.__typename === "ComponentEvaKomiBigCenterText") {
        return <BlockTextServices title={item.title} key={index} />;
      }
      return null;
    })}
  </div>
);

export default BlockConstructor;
