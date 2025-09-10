import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";

export default {
  title: "descriptionHorizontal",
};

export const listTextHorizontal =
  "Профессиональная эвакуация транспорта 24/7. Профессиональная эвакуация транспорта 24/7.\n" +
  "Наша служба предлагает оперативную помощь на дорогах Сыктывкара и Республики Коми.\n" +
  "Приезжаем в течение 30 минут после вызова, чтобы бережно перевезти ваш автомобиль, мотоцикл или груз. \n" +
  "Работаем с любыми ситуациями: ДТП, поломки, застревания в грязи/снегу, междугородние перевозки.\n";

export const DescriptionHorizontalStories = () => {
  return (
    <>
      <DescriptionHorizontal
        title="Круглосуточный эвакуатор в Сыктывкаре и Республике Коми"
        listTextHorizontal={listTextHorizontal}
      />
    </>
  );
};
