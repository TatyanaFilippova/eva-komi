"use client";
import styles from "./styles.module.scss";
import menu from "../../shared/assets/images/menu.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ModalMenu from "@/shared/components/ModalMenu/ModalMenu";
import { CONTACTS } from "@/constants/site";

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
          <Link href="/" className={styles.promo}>
            ЭваКоми
          </Link>
          <div className={styles.promo_description}>
            Служба эвакуации в Сыктывкаре и Республике Коми
          </div>
        </div>
        <div className={styles.container_menu}>
          <Link
            href="/"
            className={pathname === "/" ? styles.active_link : styles.active}
          >
            Главная
          </Link>
          <Link
            href="/services/"
            className={
              pathname.startsWith("/services") ? styles.active_link : styles.active
            }
          >
            Список услуг
          </Link>
          <Link href="#CallTruck" className={styles.active}>
            Вызвать эвакуатор
          </Link>
          <Link
            href="/prices/"
            className={
              pathname.startsWith("/prices") ? styles.active_link : styles.active
            }
          >
            Цены
          </Link>
          <Link
            href="/about/"
            className={
              pathname.startsWith("/about") ? styles.active_link : styles.active
            }
          >
            О компании
          </Link>
        </div>
        <div className={styles.shell}>
          <Link href={CONTACTS.phoneHref} className={styles.number}>
            {CONTACTS.phoneDisplay}
          </Link>
          <img
            src={menu.src}
            className={styles.icon_menu}
            onClick={openModal}
            alt="Открыть меню"
          />
        </div>
      </div>
      <ModalMenu modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
