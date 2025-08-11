import styles from "./styled.module.scss";

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
      <div>{title}</div>
      <div>
        {listTextHorizontal.map((text) => (
          <div key={text.title}>{text.title}</div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionHorizontal;
