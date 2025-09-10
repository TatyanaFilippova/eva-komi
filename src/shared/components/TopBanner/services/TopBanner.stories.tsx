import TopBanner from "@/shared/components/TopBanner/TopBanner";

export default {
  title: "topBanner",
};

export const TopBannerStories = () => {
  return (
    <>
      <TopBanner
        heading="Все услуги нашей компании"
        title="Список всех услуг службы эвакуации"
        description="Подробное описание данной страницы"
      />
    </>
  );
};
