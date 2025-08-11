import styles from "./styled.module.scss";

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
      <img src={imageCard} className={styles.image} />
      <div className={styles.title}>{titleCard}</div>
      <div className={styles.description}>{descriptionCard}</div>
    </div>
  );
}

export default CardBenefit;
