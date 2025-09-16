"use client";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";
import CardCall, {
  CardCallProps,
} from "@/shared/components/CallTruck/CardCall/CardCall";
import styles from "./styles.module.scss";

interface CallTruckProps {
  listCardCall: CardCallProps[];
  title: string;
  description: string;
}

const CallTruck = ({ listCardCall, title, description }: CallTruckProps) => {
  return (
    <div className={styles.containerCallTruck} id="CallTruck">
      <HeadingSection title={title} description={description} />
      <div className={styles.container}>
        {listCardCall.map((card) => (
          <CardCall
            href={card.href}
            titleCard={card.titleCard}
            descriptionCard={card.descriptionCard}
            method={card.method}
            processButton={card.processButton}
            id={card.id}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CallTruck;
