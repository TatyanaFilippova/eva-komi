import styles from "./styles.module.scss";
import logo from "./../../shared/assets/images/eva-komi-logo.png";

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <img src={logo.src} className={styles.icon} />
        <div className={styles.border}>
          <div className={styles.number}>89042370267</div>
          <div className={styles.address}>г. Сыктывкар, Республика Коми</div>
        </div>
      </div>
      <div className={styles.shell}>Разработано Unclespace group</div>
    </div>
  );
}

export default Footer;
