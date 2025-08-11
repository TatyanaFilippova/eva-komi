import EvacuationСards from "@/shared/components/EvacuationСards/EvacuationСards/EvacuationСards";

export default {
  title: "evacuationCards",
};

const listEvacuationCards = [
  {
    titleCard: "Эвакуация автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или внедорожник массой до 3.5.тонн",
    imageCard: "/imageCard.png",
    buttonCard: "Подробнее",
    serviceText: "Вызвать эвакуатор",
    index: 1,
  },
  {
    titleCard: "Эвакуация автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или внедорожник массой до 3.5.тонн",
    descriptionSecondCard:
      "Бережная транспортировка от 1500 руб. (включая погрузку/разгрузку)",
    imageCard: "/imageCard.png",
    buttonCard: "Подробнее",
    serviceText: "Вызвать эвакуатор",
    index: 2,
  },
  {
    titleCard: "Эвакуация автомобилей",
    descriptionCard:
      "Эвакуируем легковой автомобиль или внедорожник массой до 3.5.тонн",
    descriptionSecondCard:
      "Бережная транспортировка от 1500 руб. (включая погрузку/разгрузку)",
    imageCard: "/imageCard.png",
    buttonCard: "Подробнее",
    serviceText: "Вызвать эвакуатор",
    index: 3,
  },
];

export const EvacuationCardsStories = () => {
  return (
    <>
      <EvacuationСards
        title="Профессиональная эвакуация транспорта"
        description="Бережная перевозка автомобилей, мотоциклов и грузов с гарантией сохранности.
Работаем 24/7, выезд в течение 30 минут!"
        listEvacuationCards={listEvacuationCards}
      />
    </>
  );
};
