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
        <div className={styles.title}>{titleCard}</div>
        <div className={styles.description}>{descriptionCard}</div>
      </div>
      <div className={styles.shell}>
        <Link href={link} className={styles.button}>
          Подробнее
        </Link>
        <div className={styles.serviceText}>вызвать эвакуатор</div>
      </div>

      <img src={imageCard} className={styles.imageCard} />
    </div>
  );
};

export default Card;
