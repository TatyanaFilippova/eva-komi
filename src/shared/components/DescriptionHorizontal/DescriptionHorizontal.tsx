import styles from "./styles.module.scss";

interface DescriptionHorizontalProps {
  title: string;
  listTextHorizontal: {
    title: string;
  }[];
}

function DescriptionHorizontal({
  title,
  listTextHorizontal,
}: DescriptionHorizontalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.shell}>
        {listTextHorizontal.map((text) => (
          <div key={text.title} className={styles.description}>
            {text.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionHorizontal;
