import styles from "./styles.module.scss";

interface HeadingProps {
  title: string;
  description: string;
}

const HeadingSection = ({ title, description }: HeadingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default HeadingSection;
