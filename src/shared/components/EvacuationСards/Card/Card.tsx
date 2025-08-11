import styles from "./styles.module.scss";

export interface CardServiceProps {
  titleCard: string;
  descriptionCard: string;
  imageCard: string;
  descriptionSecondCard?: string;
  buttonCard: string;
  serviceText: string;
  index: number;
}

const Card = ({
  buttonCard,
  imageCard,
  serviceText,
  titleCard,
  descriptionCard,
  descriptionSecondCard,
}: CardServiceProps) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{titleCard}</div>
        <div className={styles.description}>{descriptionCard}</div>
        {descriptionSecondCard && (
          <div className={styles.description}>{descriptionSecondCard}</div>
        )}
      </div>
      <div className={styles.shell}>
        <button className={styles.button}>{buttonCard}</button>
        <div className={styles.serviceText}>{serviceText}</div>
      </div>

      <img src={imageCard} className={styles.imageCard} />
    </div>
  );
};

export default Card;
