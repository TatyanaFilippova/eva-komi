import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";

export interface CardProps {
  titleCard: string;
  descriptionCard: string;
  descriptionSecondCard?: string;
  imageCard: string;
  size: string;
  id?: number;
  link?: string;
}

const Card = ({
  titleCard,
  descriptionCard,
  descriptionSecondCard,
  imageCard,
  size,
  link,
}: CardProps) => {
  return (
    <motion.div
      className={styles.container + " " + styles[`container-${size}`]}
      initial={{ opacity: 0.8, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.title}>{titleCard}</div>
      <div className={styles.shell}>
        <div>
          <div className={styles.description}>{descriptionCard}</div>
          <div className={styles.description}>{descriptionSecondCard}</div>
          {link && (
            <Link href={link}>
              <button className={styles.button}>Перейти</button>
            </Link>
          )}
        </div>
        <img src={imageCard} className={styles.image} />
      </div>
    </motion.div>
  );
};

export default Card;
