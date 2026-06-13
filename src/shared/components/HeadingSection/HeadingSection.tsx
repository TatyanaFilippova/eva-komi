"use client";
import styles from "./styles.module.scss";

interface HeadingProps {
  title: string;
  description: string;
}

const HeadingSection = ({ title, description }: HeadingProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HeadingSection;
