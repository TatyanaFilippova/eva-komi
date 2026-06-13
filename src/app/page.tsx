import styles from "./page.module.scss";
import Header from "@/widgets/Header/Header";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import Footer from "@/widgets/Footer/Footer";
import TopBannerHome from "@/shared/components/TopBanner/home/TopBanner";
import { homeData } from "@/constants/home";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";
import { SchemaOrg } from "@/app/schema-org";
import { CALL_TRUCK, listCardCall, RUNNING_LINE_TEXT } from "@/constants/site";
import { buildPageMetadata } from "@/utils/seo/metadata";

export const metadata = buildPageMetadata({
  title: homeData.metaTitle,
  description: homeData.metaDescription,
  path: "/",
});

export default function Home() {
  return (
    <div className={styles.page}>
      <SchemaOrg />
      <Header />
      <TopBannerHome title={homeData.title} description={homeData.text} />
      <RunningLine text={RUNNING_LINE_TEXT} />
      <BlockConstructor blocks={homeData.blocks} />
      <CallTruck
        listCardCall={[...listCardCall]}
        title={CALL_TRUCK.title}
        description={CALL_TRUCK.description}
      />
      <Footer />
    </div>
  );
}
