import Card from "@/shared/components/ServiceCards/Card/Card";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";

const ServiceCards = () => {
  return (
    <div>
      <HeadingSection
        title="Какие проблемы мы решаем"
        description="Неважно, попали ли вы в ДТП, сломались на трассе или просто хотите перегнать автомобиль — мы обеспечим безопасную транспортировку с гарантией сохранности."
      />
      <Card
        titleCard={"Эвакуация легковых автомобилей"}
        descriptionCard={
          "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн"
        }
        descriptionSecondCard={
          "В данную категорию относятся хетчбеки, седаны, универсалы, минивены"
        }
        imageCard="/imageCard.png"
        size={"S"}
      />
    </div>
  );
};

export default ServiceCards;
