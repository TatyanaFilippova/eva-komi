import styles from "./styles.module.scss";
import logo from "./../../shared/assets/images/logo.png";

function Footer() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <img src={logo.src} className={styles.icon} />
        <div className={styles.border}>
          <div className={styles.number}>89042370267</div>
          <div className={styles.address}>г. Сыктывкар, Республика Коми</div>
        </div>
      </div>
      <div className={styles.bgBottom}>
        <div className={styles.shell}>Разработано Unclespace group</div>
      </div>
    </div>
  );
}

export default Footer;
