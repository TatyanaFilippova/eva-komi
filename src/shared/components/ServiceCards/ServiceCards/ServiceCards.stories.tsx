import ServiceCards from "@/shared/components/ServiceCards/ServiceCards/ServiceCards";

export default {
  title: "serviceCards",
};

export const listCards = [
  {
    titleCard: "Эвакуация легковых автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн",
    descriptionSecondCard:
      "В данную категорию относятся хетчбеки, седаны, универсалы, минивены",
    imageCard: "/imageCard.png",
    size: "M",
    id: 1,
  },

  {
    titleCard: "Эвакуация легковых автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн",
    descriptionSecondCard:
      "В данную категорию относятся хетчбеки, седаны, универсалы, минивены",
    imageCard: "/imageCard.png",
    size: "S",
    id: 2,
  },
  {
    titleCard: "Эвакуация легковых автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн",
    descriptionSecondCard:
      "В данную категорию относятся хетчбеки, седаны, универсалы, минивены",
    imageCard: "/imageCard.png",
    size: "L",
    id: 3,
  },
];

export const ServiceCardsStories = () => {
  return (
    <>
      <ServiceCards
        listCards={listCards}
        title="Какие проблемы мы решаем"
        description="Неважно, попали ли вы в ДТП, сломались на трассе или просто хотите перегнать автомобиль — мы обеспечим безопасную транспортировку с гарантией сохранности."
      />
    </>
  );
};
