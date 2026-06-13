import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import Footer from "@/widgets/Footer/Footer";
import { SchemaOrg, BreadcrumbSchema } from "@/app/services/schema-org";
import { servicesPageData } from "@/constants/servicesPage";
import { CALL_TRUCK, listCardCall, RUNNING_LINE_TEXT } from "@/constants/site";
import { buildPageMetadata } from "@/utils/seo/metadata";
import { FaqSchema, collectFaqFromBlocks } from "@/utils/seo/faqSchema";

export const metadata = buildPageMetadata({
  title: servicesPageData.metaTitle,
  description: servicesPageData.metaDescription,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg />
      <BreadcrumbSchema />
      <FaqSchema items={collectFaqFromBlocks(servicesPageData.blocks)} />
      <Header />
      <TopBanner
        title={servicesPageData.title}
        description={servicesPageData.text}
        subtitle={servicesPageData.subtitle}
        imageAlt="Услуги эвакуатора в Сыктывкаре"
      />
      <RunningLine text={RUNNING_LINE_TEXT} />
      <BlockConstructor blocks={servicesPageData.blocks} />
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
      <Footer />
    </>
  );
}
