"use client";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";
import CardBenefit, {
  CardBenefitsProps,
} from "@/shared/components/Benefits/CardBenefit/CardBenefit";
import styles from "./styles.module.scss";

interface BenefitsProps {
  title: string;
  description: string;
  listBenefits: CardBenefitsProps[];
}

const Benefits = ({ title, description, listBenefits }: BenefitsProps) => {
  return (
    <div className={styles.container}>
      <HeadingSection title={title} description={description} />
      <div className={styles.containerCard}>
        {listBenefits.map((benefit) => (
          <CardBenefit
            imageCard={benefit.imageCard}
            titleCard={benefit.titleCard}
            descriptionCard={benefit.descriptionCard}
            key={benefit.titleCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
