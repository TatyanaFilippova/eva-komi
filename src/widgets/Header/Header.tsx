import styles from "./styles.module.scss";

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
          <div>Главная</div>
          <div>Список услуг</div>
          <div>Вызвать эвакуатор</div>
          <div>Цены</div>
          <div>О компании</div>
        </div>
        <div className={styles.number}>+7(912)864-01-11</div>
      </div>
    </div>
  );
};

export default Header;
