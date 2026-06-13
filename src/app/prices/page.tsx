import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";
import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { pricesPageData } from "@/constants/prices";
import { buildPageMetadata } from "@/utils/seo/metadata";
import { CALL_TRUCK, listCardCall } from "@/constants/site";
import { StaticPageBreadcrumb } from "@/app/services/[slug]/schema-org";
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
        <p className={styles.disclaimer}>{pricesPageData.disclaimer}</p>
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
