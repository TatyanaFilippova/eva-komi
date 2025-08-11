import DescriptionHorizontal from "@/shared/components/DescriptionHorizontal/DescriptionHorizontal";

export default {
  title: "DescriptionHorizontal",
};

const listTextHorizontal = [
  {
    title:
      "Бережно перевезём ваш автомобиль при ДТП, поломке или для перегона. \n" +
      "Работаем 24/7, используем надёжные крепления, даём гарантию сохранности.",
  },
  {
    title:
      "Бережно перевезём ваш автомобиль при ДТП, поломке или для перегона. \n" +
      "Работаем 24/7, используем надёжные крепления, даём гарантию сохранности.",
  },
  {
    title:
      "Бережно перевезём ваш автомобиль при ДТП, поломке или для перегона. \n" +
      "Работаем 24/7, используем надёжные крепления, даём гарантию сохранности.",
  },
  {
    title:
      "Бережно перевезём ваш автомобиль при ДТП, поломке или для перегона. \n" +
      "Работаем 24/7, используем надёжные крепления, даём гарантию сохранности.",
  },
];

export const DescriptionHorizontalStories = () => {
  return (
    <>
      <DescriptionHorizontal
        title="Мы по настоящему следим за вашим автомобилем"
        listTextHorizontal={listTextHorizontal}
      />
    </>
  );
};
