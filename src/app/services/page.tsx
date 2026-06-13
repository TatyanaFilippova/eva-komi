import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import Footer from "@/widgets/Footer/Footer";
import { Metadata } from "next";
import { SchemaOrg } from "@/app/services/schema-org";
import { servicesPageData } from "@/constants/servicesPage";
import { CALL_TRUCK, listCardCall, RUNNING_LINE_TEXT } from "@/constants/site";

export const metadata: Metadata = {
  title: servicesPageData.metaTitle,
  description: servicesPageData.metaDescription,
};

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg />
      <Header />
      <TopBanner
        title={servicesPageData.title}
        description={servicesPageData.text}
        subtitle={servicesPageData.subtitle}
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
