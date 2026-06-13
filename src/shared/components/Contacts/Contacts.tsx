import styles from "./styles.module.scss";
import vk from "./../../assets/images/vk.png";
import number from "./../../assets/images/number.png";
import { CONTACTS } from "@/constants/site";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shell}>
        <img src={vk.src} className={styles.icon} alt="Группа ВКонтакте" />
        <a href={CONTACTS.vk} className={styles.title}>
          vk.com/evakyatorkomi
        </a>
      </div>
      <div className={styles.shell}>
        <img src={number.src} className={styles.icon} alt="Телефон" />
        <a href={CONTACTS.phoneHref} className={styles.title}>
          {CONTACTS.phoneDisplay}
        </a>
      </div>
      <div className={styles.shell}>
        <img src={number.src} className={styles.icon} alt="Дополнительный телефон" />
        <a href={`tel:${CONTACTS.additionalTel}`} className={styles.title}>
          {CONTACTS.additionalDisplay}
          <span className={styles.note}> — доп. номер</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
