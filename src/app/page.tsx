"use client";

import styles from "./page.module.scss";
import Header from "@/widgets/Header/Header";
import TopBanner from "@/shared/components/TopBanner/TopBanner";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import ServiceCards from "@/shared/components/ServiceCards/ServiceCards/ServiceCards";
import { listCards } from "@/shared/components/ServiceCards/ServiceCards/ServiceCards.stories";
import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";
import { listTextHorizontal } from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal.stories";
import CallTruck from "@/shared/components/CallTruck/CallTruck/CallTruck";
import { listCardCall } from "@/shared/components/CallTruck/CallTruck/CallTruck.stories";
import Benefits from "@/shared/components/Benefits/Benefits";
import { listBenefits } from "@/widgets/listBenefits/listBenefits";
import Footer from "@/widgets/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <TopBanner
        title="Быстрая, надежная и безопасная эвакуация автомобилей!"
        description="Эвакуация автомобилей по Сыктывкару и Республике Коми"
      />
      <RunningLine text="Все услуги службы эвакуации" />
      <ServiceCards
        listCards={listCards}
        title="Какие проблемы мы решаем"
        description="Неважно, попали ли вы в ДТП, сломались на трассе или просто хотите перегнать автомобиль — мы обеспечим безопасную транспортировку с гарантией сохранности."
      />
      <DescriptionHorizontal
        title="Круглосуточный эвакуатор в Сыктывкаре и Республике Коми"
        listTextHorizontal={listTextHorizontal}
      />
      <CallTruck
        listCardCall={listCardCall}
        title="Как вызвать эвакуатор"
        description="Также вы можете задать свой вопрос, получить консультацию,  узнать текущие цены и акции."
      />
      <Benefits
        title="Почему лучше работать с нами"
        description="Наша команда профессиональных водителей готова прийти на помощь 24 часа в сутки, 7 дней в неделю"
        listBenefits={listBenefits}
      />
      <Footer />
    </div>
  );
}
