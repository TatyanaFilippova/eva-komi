"use client";
import Card, { CardProps } from "@/shared/components/ServiceCards/Card/Card";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";
import styles from "./styles.module.scss";

interface ServiceCardProps {
  listCards: CardProps[];
  title: string;
  description: string;
}

const ServiceCards = ({ listCards, title, description }: ServiceCardProps) => {
  return (
    <div className={styles.container}>
      <HeadingSection title={title} description={description} />
      <div className={styles.containerCards}>
        {listCards.map((card, index) => (
          <Card
            titleCard={card.titleCard}
            descriptionCard={card.descriptionCard}
            descriptionSecondCard={card.descriptionSecondCard}
            imageCard={card.imageCard}
            size={card.size}
            key={index}
            id={card.id}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
