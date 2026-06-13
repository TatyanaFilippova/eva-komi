import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import Footer from "@/widgets/Footer/Footer";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import { SchemaOrg } from "@/app/services/[slug]/schema-org";
import { getServiceBySlug, serviceSlugs } from "@/constants/services";
import { CALL_TRUCK, listCardCall } from "@/constants/site";
import { buildPageMetadata } from "@/utils/seo/metadata";
import { notFound } from "next/navigation";

export const generateStaticParams = () =>
  serviceSlugs.map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}/`,
  });
};

const DetailedServices = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <SchemaOrg
        title={service.title}
        description={service.description}
        url={`https://evakuator-service11.ru/services/${slug}/`}
      />
      <Header />
      <TopBanner
        title={service.title}
        description={service.description}
        subtitle={service.subTitle}
        image={service.banner.url}
        imageAlt={service.title}
      />
      <RunningLine text={service.interactiveText ?? ""} />
      <BlockConstructor blocks={service.blocks} />
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
      <Footer />
    </div>
  );
};

export default DetailedServices;
