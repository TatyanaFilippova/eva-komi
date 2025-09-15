import styles from "./page.module.scss";
import Header from "@/widgets/Header/Header";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Footer from "@/widgets/Footer/Footer";
import TopBannerHome from "@/shared/components/TopBanner/home/TopBanner";
import { getHomeData } from "@/utils/api/getHomeData";
import BlockConstructor from "@/shared/components/BlockConstructor/BlockConstructor";

export default async function Home() {
  const data = await getHomeData();
  return (
    <div className={styles.page}>
      <Header />
      <TopBannerHome title={data.home.title} description={data.home.text} />
      <RunningLine text="Все услуги службы эвакуации" />
      <BlockConstructor blocks={data.home.blocks} />
      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию, узнать текущие цены и акции."
      />
      <Footer />
    </div>
  );
}
