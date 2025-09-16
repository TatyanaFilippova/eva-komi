"use client";
import styles from "./styles.module.scss";
import menu from "../../shared/assets/images/menu.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ModalMenu from "@/shared/components/ModalMenu/ModalMenu";

const Header = () => {
  const pathname = usePathname();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
          <Link
            href="/#"
            className={pathname === "/" ? styles.active_link : styles.active}
          >
            Главная
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services" ? styles.active_link : styles.active
            }
          >
            Список услуг
          </Link>
          <Link href="/#" className={styles.active}>
            Вызвать эвакуатор
          </Link>
          <Link href="/#" className={styles.active}>
            Цены
          </Link>
          <Link href="/#" className={styles.active}>
            О компании
          </Link>
        </div>
        <div className={styles.shell}>
          <div className={styles.number}>+7(912)864-01-11</div>
          <img
            src={menu.src}
            className={styles.icon_menu}
            onClick={openModal}
          />
        </div>
      </div>
      <ModalMenu modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
