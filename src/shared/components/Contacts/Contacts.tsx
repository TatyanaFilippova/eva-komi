import styles from "./styles.module.scss";
import vk from "./../../assets/images/vk.png";
import number from "./../../assets/images/number.png";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shell}>
        <img src={vk.src} className={styles.icon} />
        <div className={styles.title}>https://vk.com/evakyatorkomi</div>
      </div>
      <div className={styles.shell}>
        <img src={number.src} className={styles.icon} />
        <div className={styles.title}>+7 963 022-16-79 </div>
      </div>
    </div>
  );
};

export default Contacts;
