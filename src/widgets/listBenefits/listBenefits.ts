import icon1 from "./../../shared/assets/images/icon1.png";
import icon2 from "./../../shared/assets/images/icon2.png";
import icon3 from "./../../shared/assets/images/icon3.png";
import { CardBenefitsProps } from "@/shared/components/Benefits/CardBenefit/CardBenefit";

export const listBenefits: CardBenefitsProps[] = [
  {
    imageCard: icon1.src,
    titleCard: "Приедем на помощь быстрее всех",
    descriptionCard:
      "Наши эвакуаторы дежурят в разных районах Сыктывкара и Республики Коми, что позволяет нам оперативно реагировать на вызовы.",
  },
  {
    imageCard: icon2.src,
    titleCard: "Бережная транспортировка",
    descriptionCard:
      "Используем профессиональные крепления и мягкие фиксаторы. ",
  },
  {
    imageCard: icon3.src,
    titleCard: "Прозрачное ценообразование",
    descriptionCard:
      "Цена называется сразу при оформлении заявки и не меняется. \n" +
      "Принимаем оплату любым удобным способом: наличные, карта или онлайн-перевод.",
  },
];
