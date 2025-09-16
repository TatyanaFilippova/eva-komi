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
      <a href={href} className={styles.buttonCardCall}>
        {processButton}
      </a>
    </div>
  );
};

export default CardCall;
