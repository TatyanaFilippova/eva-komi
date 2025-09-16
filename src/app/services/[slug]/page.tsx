import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import { getDetailedServicesData } from "@/utils/api/getDetailedServicesData";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Footer from "@/widgets/Footer/Footer";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const data = await getDetailedServicesData(slug);

  return {
    title: data.services[0].metaTitle,
    description: data.services[0].metaDescription,
  };
};

const DetailedServices = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = await getDetailedServicesData(slug);
  const services = data.services[0];
  return (
    <div>
      <Header />
      <TopBanner
        title={services.title}
        description={services.subTitle}
        subtitle=""
      />
      <RunningLine text={services.interactiveText} />
      <BlockConstructor blocks={services.blocks} />
      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию,  узнать текущие цены и акции."
      />
      <Footer />
    </div>
  );
};

// export const dynamic = "force-dynamic"

export default DetailedServices;
