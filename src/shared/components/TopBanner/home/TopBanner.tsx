"use client";
import styles from "./styles.module.scss";
import carBanner from "./../../../assets/images/carBanner.png";
import fonBanner from "./../../../assets/images/fonBanner.png";
import Contacts from "./../../Contacts/Contacts";
import phon from "./../../../assets/images/phon.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTACTS } from "@/constants/site";

interface TopBannerHomeProps {
  title: string;
  heading?: string;
  description: string;
}

const TopBannerHome = ({ heading, description, title }: TopBannerHomeProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <img src={fonBanner.src} className={styles.fonBanner} alt="" />
      <img
        src={carBanner.src}
        className={styles.carBanner}
        alt="Эвакуатор Эва Коми в Сыктывкаре"
      />
      <div className={styles.shell}>
        {heading && <p className={styles.heading}>{heading}</p>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.shellContacts}>
        <Contacts />
        <Link
          href={CONTACTS.phoneHref}
          className={scrolled ? styles.imageScrolled : styles.image}
        >
          <img src={phon.src} alt="Позвонить эвакуатору" />
        </Link>
      </div>
    </div>
  );
};

export default TopBannerHome;
