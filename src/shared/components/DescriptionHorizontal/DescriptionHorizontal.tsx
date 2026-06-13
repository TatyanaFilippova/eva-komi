"use client";
import styles from "./styles.module.scss";

interface DescriptionHorizontalProps {
  title: string;
  listTextHorizontal: string;
}

function DescriptionHorizontal({
  title,
  listTextHorizontal,
}: DescriptionHorizontalProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>
        {listTextHorizontal.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default DescriptionHorizontal;
