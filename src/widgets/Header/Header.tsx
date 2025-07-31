import styles from "./styles.module.scss";
import menu from "../../shared/assets/images/menu.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.border_bottom}>
      <div className={styles.header}>
        <div className={styles.container_promo}>
          <div className={styles.promo}>ЭваКоми</div>
          <div className={styles.promo_description}>
            Служба эвакуации в Сыктывкаре и Республике Коми
          </div>
        </div>
        <div className={styles.container_menu}>
          <Link href="/#">Главная</Link>
          <Link href="/#">Список услуг</Link>
          <Link href="/#">Вызвать эвакуатор</Link>
          <Link href="/#">Цены</Link>
          <Link href="/#">О компании</Link>
        </div>
        <div className={styles.shell}>
          <div className={styles.number}>+7(912)864-01-11</div>
          <img src={menu.src} className={styles.icon_menu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
