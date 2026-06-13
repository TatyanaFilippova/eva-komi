import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";
import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import Faq from "@/shared/components/Faq/Faq";
import { pricesPageData } from "@/constants/prices";
import { buildPageMetadata } from "@/utils/seo/metadata";
import { CALL_TRUCK, listCardCall } from "@/constants/site";
import { StaticPageBreadcrumb } from "@/app/services/[slug]/schema-org";
import { FaqSchema } from "@/utils/seo/faqSchema";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = buildPageMetadata({
  title: pricesPageData.metaTitle,
  description: pricesPageData.metaDescription,
  path: "/prices/",
});

export default function PricesPage() {
  return (
    <>
      <StaticPageBreadcrumb pageName="Цены" path="/prices/" />
      <FaqSchema items={pricesPageData.faq} />
      <Header />
      <TopBanner
        title={pricesPageData.title}
        subtitle={pricesPageData.subtitle}
        description={pricesPageData.description}
        imageAlt="Цены на эвакуатор в Сыктывкаре"
      />
      <section className={styles.prices}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {pricesPageData.items.map((item) => (
              <tr key={item.service}>
                <td>
                  <Link href={item.link}>{item.service}</Link>
                </td>
                <td>{item.price}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.factors}>
          <h2>От чего зависит итоговая цена</h2>
          <ul>
            {pricesPageData.factors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </div>
        <p className={styles.disclaimer}>{pricesPageData.disclaimer}</p>
      </section>
      <Faq title="Вопросы о ценах" items={pricesPageData.faq} />
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
      <Footer />
    </>
  );
}
