"use client";
import styles from "./styles.module.scss";
import carBanner from "./../../../assets/images/carBanner.png";
import fonBanner from "./../../../assets/images/fonBanner.png";
import Contacts from "@/shared/components/Contacts/Contacts";

interface TopBannerProps {
  title: string;
  heading?: string;
  description: string;
}

const TopBanner = ({ heading, description, title }: TopBannerProps) => {
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
      </div>
    </div>
  );
};

export default TopBanner;
