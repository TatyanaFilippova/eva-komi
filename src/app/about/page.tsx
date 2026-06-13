import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";
import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { aboutPageData } from "@/constants/about";
import { buildPageMetadata } from "@/utils/seo/metadata";
import { CALL_TRUCK, CONTACTS, listCardCall } from "@/constants/site";
import {
  AboutSchemaOrg,
  StaticPageBreadcrumb,
} from "@/app/services/[slug]/schema-org";
import styles from "./page.module.scss";

export const metadata = buildPageMetadata({
  title: aboutPageData.metaTitle,
  description: aboutPageData.metaDescription,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <AboutSchemaOrg />
      <StaticPageBreadcrumb pageName="О компании" path="/about/" />
      <Header />
      <TopBanner
        title={aboutPageData.title}
        subtitle={aboutPageData.subtitle}
        description={aboutPageData.description}
        imageAlt="О компании Эва Коми"
      />
      <section className={styles.about}>
        {aboutPageData.sections.map((section) => (
          <article key={section.title} className={styles.section}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </article>
        ))}
        <div className={styles.contacts}>
          <h2>Контакты</h2>
          <p>
            Телефон:{" "}
            <a href={CONTACTS.phoneHref}>{CONTACTS.phoneDisplay}</a>
          </p>
          <p>
            Дополнительный номер:{" "}
            <a href={`tel:${CONTACTS.additionalTel}`}>
              {CONTACTS.additionalDisplay}
            </a>
          </p>
          <p>{CONTACTS.address}</p>
        </div>
      </section>
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
      <Footer />
    </>
  );
}
