import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import { getServicesData } from "@/utils/api/getServicesData";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Footer from "@/widgets/Footer/Footer";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getServicesData();

  return {
    title: data.servicesBreeding.metaTitle,
    description: data.servicesBreeding.metaDescription,
  };
};

export default async function Home() {
  const data = await getServicesData();
  return (
    <>
      <Header />
      <TopBanner
        title={data.servicesBreeding.title}
        description={data.servicesBreeding.text}
        subtitle={data.servicesBreeding.subtitle}
      />
      <RunningLine text="Все услуги службы эвакуации" />
      <BlockConstructor blocks={data.servicesBreeding.blocks} />
      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию, узнать текущие цены и акции."
      />
      <Footer />
    </>
  );
}
