"use client";
import styles from "./styles.module.scss";
import logo from "./../../shared/assets/images/logo.png";
import { CONTACTS } from "@/constants/site";

function Footer() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <img src={logo.src} className={styles.icon} alt="Эва Коми — эвакуатор" />
        <div className={styles.border}>
          <a href={CONTACTS.phoneHref} className={styles.number}>
            {CONTACTS.phoneDisplay}
          </a>
          <div className={styles.address}>{CONTACTS.address}</div>
        </div>
      </div>
      <div className={styles.bgBottom}>
        <div className={styles.shell}>Разработано Unclespace group</div>
      </div>
    </div>
  );
}

export default Footer;
