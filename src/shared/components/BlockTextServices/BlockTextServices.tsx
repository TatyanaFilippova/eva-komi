import styles from "./styles.module.scss";

interface BlockTextServicesProps {
  title: string;
}

const BlockTextServices = ({ title }: BlockTextServicesProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default BlockTextServices;
