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

const EvacuationСards = ({
  title,
  description,
  listEvacuationCards,
}: EvacuationCardsProps) => {
  return (
    <div className={styles.container}>
      <HeadingSection title={title} description={description} />
      <div className={styles.containerCards}>
        {listEvacuationCards.map((card, index) => (
          <div
            key={card.index}
            style={{ marginLeft: index % 2 ? "auto" : "0" }}
          >
            <Card
              titleCard={card.titleCard}
              descriptionCard={card.descriptionCard}
              descriptionSecondCard={card.descriptionSecondCard}
              buttonCard={card.buttonCard}
              imageCard={card.imageCard}
              index={card.index}
              serviceText={card.serviceText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvacuationСards;
