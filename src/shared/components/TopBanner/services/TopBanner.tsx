"use client";
import styles from "./styles.module.scss";
import carBanner from "./../../../assets/images/carBanner.png";
import fonBanner from "./../../../assets/images/fonBanner.png";
import Contacts from "@/shared/components/Contacts/Contacts";

interface TopBannerProps {
  title: string;
  heading?: string;
  description: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

const TopBanner = ({
  heading,
  description,
  title,
  image,
  subtitle,
  imageAlt,
}: TopBannerProps) => {
  const bannerAlt = imageAlt ?? title;

  return (
    <div className={styles.container}>
      <img src={fonBanner.src} className={styles.fonBanner} alt="" />
      {image ? (
        <img src={image} className={styles.carBanner} alt={bannerAlt} />
      ) : (
        <img src={carBanner.src} className={styles.carBanner} alt={bannerAlt} />
      )}

      <div className={styles.shell}>
        {heading && <p className={styles.heading}>{heading}</p>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.shellContacts}>
        <Contacts />
      </div>
    </div>
  );
};

export default TopBanner;
