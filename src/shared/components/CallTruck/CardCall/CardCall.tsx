import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export interface CardCallProps {
  titleCard: string;
  descriptionCard: string;
  method: string;
  processButton: string;
  id: number;
  href: string;
}

const CardCall = ({
  titleCard,
  descriptionCard,
  method,
  href,
  processButton,
}: CardCallProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{titleCard}</div>
      <div className={styles.description}>{descriptionCard}</div>
      <div className={styles.method}>{method}</div>
      <motion.a
        href={href}
        className={styles.buttonCardCall}
        whileTap={{ scale: 0.95 }}
      >
        {processButton}
      </motion.a>
    </div>
  );
};

export default CardCall;
