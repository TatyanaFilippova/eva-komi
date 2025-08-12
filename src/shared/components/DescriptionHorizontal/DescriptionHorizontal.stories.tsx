import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";

export default {
  title: "descriptionHorizontal",
};

export const listTextHorizontal = [
  {
    title: "Профессиональная эвакуация транспорта 24/7. ",
  },
  {
    title:
      "Наша служба предлагает оперативную помощь на дорогах Сыктывкара и Республики Коми. ",
  },
  {
    title:
      "Приезжаем в течение 30 минут после вызова, чтобы бережно перевезти ваш автомобиль, мотоцикл или груз. ",
  },
  {
    title:
      "Работаем с любыми ситуациями: ДТП, поломки, застревания в грязи/снегу, междугородние перевозки.",
  },
  {
    title:
      "Готовы перевести ваш автомобиль в соседний регион и по всей России.",
  },
];

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
