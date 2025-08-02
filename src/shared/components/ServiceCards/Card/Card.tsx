import styles from "./styles.module.scss";

interface CardProps {
  titleCard: string;
  descriptionCard: string;
  descriptionSecondCard: string;
  imageCard: string;
  size: string;
}

const Card = ({
  titleCard,
  descriptionCard,
  descriptionSecondCard,
  imageCard,
  size,
}: CardProps) => {
  return (
    <div className={styles.container + " " + styles[`container-${size}`]}>
      <div className={styles.title}>{titleCard}</div>
      <div className={styles.shell}>
        <div>
          <div className={styles.description}>{descriptionCard}</div>
          <div className={styles.description}>{descriptionSecondCard}</div>
        </div>
        <img src={imageCard} className={styles.image} />
      </div>
    </div>
  );
};

export default Card;
