"use client";
import styles from "./styles.module.scss";
import carBanner from "./../../../assets/images/carBanner.png";
import fonBanner from "./../../../assets/images/fonBanner.png";
import Contacts from "./../../Contacts/Contacts";
import phon from "./../../../assets/images/phon.svg";
import { useEffect, useState } from "react";

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
      <img src={fonBanner.src} className={styles.fonBanner} />
      <img src={carBanner.src} className={styles.carBanner} />
      <div className={styles.shell}>
        {heading && <div className={styles.heading}>{heading}</div>}
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.shellContacts}>
        <Contacts />
        <img
          src={phon.src}
          className={scrolled ? styles.imageScrolled : styles.image}
          alt="phon"
        />
      </div>
    </div>
  );
};

export default TopBannerHome;
