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
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{listTextHorizontal}</div>
    </div>
  );
}

export default DescriptionHorizontal;
