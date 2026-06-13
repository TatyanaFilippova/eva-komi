import styles from "./styles.module.scss";

export interface CardBenefitsProps {
  imageCard: string;
  titleCard: string;
  descriptionCard: string;
}

function CardBenefit({
  imageCard,
  titleCard,
  descriptionCard,
}: CardBenefitsProps) {
  return (
    <div className={styles.container}>
      <img src={imageCard} className={styles.image} alt={titleCard} />
      <h3 className={styles.title}>{titleCard}</h3>
      <div className={styles.description}>{descriptionCard}</div>
    </div>
  );
}

export default CardBenefit;
