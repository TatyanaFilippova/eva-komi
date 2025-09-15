"use client";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";
import Card, {
  CardServiceProps,
} from "@/shared/components/EvacuationСards/Card/Card";
import styles from "./styles.module.scss";

interface EvacuationCardsProps {
  title: string;
  description: string;
  listEvacuationCards: CardServiceProps[];
}

const EvacuationCards = ({
  title,
  description,
  listEvacuationCards,
}: EvacuationCardsProps) => {
  return (
    <div className={styles.container}>
      <HeadingSection title={title} description={description} />
      <div className={styles.containerCards}>
        {listEvacuationCards.map((card, index) => (
          <div key={index} style={{ marginLeft: index % 2 ? "auto" : "0" }}>
            <Card
              titleCard={card.titleCard}
              descriptionCard={card.descriptionCard}
              link={card.link ? card.link : "#"}
              imageCard={card.imageCard}
              index={card.index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvacuationCards;
