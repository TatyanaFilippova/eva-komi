import styles from "./page.module.scss";
import Header from "@/widgets/Header/Header";
import TopBanner from "@/shared/components/TopBanner/TopBanner";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import ServiceCards from "@/shared/components/ServiceCards/ServiceCards/ServiceCards";
import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Benefits from "@/shared/components/Benefits/Benefits";
import Footer from "@/widgets/Footer/Footer";
import { getHomeData } from "@/utils/api/api";

export default async function Home() {
  const data = await getHomeData();
  console.log(data);
  return (
    <div className={styles.page}>
      <Header />
      <TopBanner title={data.home.title} description={data.home.text} />
      <RunningLine text="Все услуги службы эвакуации" />
      {data.home.blocks.map((item, index) => {
        if (
          item.__typename === "ComponentEvaKomiServiceCards" &&
          item.variant === "services"
        ) {
          return (
            <ServiceCards
              key={index}
              title={item.title}
              description={item.description}
              listCards={item.list.map((card) => {
                return {
                  titleCard: card.title,
                  descriptionCard: card.description,
                  size: card.size?.toUpperCase(),
                  imageCard: card.image.url,
                };
              })}
            />
          );
        }
        if (item.__typename === "ComponentEvaKomiText") {
          return (
            <DescriptionHorizontal
              key={index}
              title={item.title}
              listTextHorizontal={item.content}
            />
          );
        }
        if (
          item.__typename === "ComponentEvaKomiServiceCards" &&
          item.variant === "advantages"
        ) {
          return (
            <Benefits
              key={index}
              title={item.title}
              description={item.description}
              listBenefits={item.list.map((card) => {
                return {
                  titleCard: card.title,
                  descriptionCard: card.description,
                  imageCard: card.image.url,
                };
              })}
            />
          );
        }
        return null;
      })}

      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию,  узнать текущие цены и акции."
      />

      <Footer />
    </div>
  );
}
