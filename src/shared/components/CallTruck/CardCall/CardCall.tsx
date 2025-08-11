import styles from "./styles.module.scss";

export interface CardCallProps {
  titleCard: string;
  descriptionCard: string;
  method: string;
  processButton: string;
  id: number;
}

const CardCall = ({
  titleCard,
  descriptionCard,
  method,
  processButton,
}: CardCallProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{titleCard}</div>
      <div className={styles.description}>{descriptionCard}</div>
      <div className={styles.method}>{method}</div>
      <button className={styles.buttonCardCall}>{processButton}</button>
    </div>
  );
};

export default CardCall;
