import styles from "./styles.module.scss";
import Link from "next/link";

export interface CardServiceProps {
  titleCard: string;
  descriptionCard: string;
  imageCard: string;
  link: string;
  index?: number;
}

const Card = ({
  link,
  imageCard,
  titleCard,
  descriptionCard,
}: CardServiceProps) => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>{titleCard}</h3>
        <div className={styles.description}>{descriptionCard}</div>
      </div>
      <div className={styles.shell}>
        <Link href={link} className={styles.button}>
          Подробнее
        </Link>
        <Link href="#CallTruck" className={styles.serviceText}>
          вызвать эвакуатор
        </Link>
      </div>

      <img src={imageCard} className={styles.imageCard} alt={titleCard} />
    </div>
  );
};

export default Card;
