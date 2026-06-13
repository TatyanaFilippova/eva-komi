import styles from "./styles.module.scss";

interface BlockTextServicesProps {
  title: string;
}

const BlockTextServices = ({ title }: BlockTextServicesProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {title.split("\n\n").map((paragraph, index, arr) => (
          <span key={index}>
            {paragraph}
            {index < arr.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default BlockTextServices;
