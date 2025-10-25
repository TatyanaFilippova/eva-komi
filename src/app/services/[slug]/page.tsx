import TopBanner from "@/shared/components/TopBanner/services/TopBanner";
import Header from "@/widgets/Header/Header";
import { getDetailedServicesData } from "@/utils/api/getDetailedServicesData";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Footer from "@/widgets/Footer/Footer";
import { Metadata } from "next";
import { gql, GraphQLClient } from "graphql-request";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import { SchemaOrg } from "@/app/services/[slug]/schema-org";

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

const endpoint = "https://cms.evakuator-service11.ru/graphql";
const client = new GraphQLClient(endpoint);

export const generateStaticParams = async () => {
  const data = await client.request<any>(gql`
    query Slugs {
      services {
        slug
      }
    }
  `);

  return data.services.map((item: any) => ({
    slug: item.slug,
  }));
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
      <SchemaOrg
        title={services.title}
        subtitle={services.subTitle}
        url={`https://evakuator-service11.ru/services/${slug}/`}
      />
      <Header />
      <TopBanner
        title={services.title}
        description={services.description}
        subtitle={services.subTitle}
        image={services.banner.url}
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

export const dynamic = "force-dynamic";

export default DetailedServices;
