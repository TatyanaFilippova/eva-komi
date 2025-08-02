import Card from "@/shared/components/ServiceCards/Card/Card";
import HeadingSection from "@/shared/components/HeadingSection/HeadingSection";
import styles from "./styles.module.scss";

const ServiceCards = () => {
  return (
    <div className={styles.container}>
      <HeadingSection
        title="Какие проблемы мы решаем"
        description="Неважно, попали ли вы в ДТП, сломались на трассе или просто хотите перегнать автомобиль — мы обеспечим безопасную транспортировку с гарантией сохранности."
      />
      <div className={styles.containerCards}>
        <Card
          titleCard={"Эвакуация легковых автомобилей"}
          descriptionCard={
            "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн"
          }
          descriptionSecondCard={
            "В данную категорию относятся хетчбеки, седаны, универсалы, минивены"
          }
          imageCard="/imageCard.png"
          size={"M"}
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
        <Card
          titleCard={"Эвакуация легковых автомобилей"}
          descriptionCard={
            "Эвакуируем легковой автомобиль или легкий кроссовер массой до 2.5.тонн"
          }
          descriptionSecondCard={
            "В данную категорию относятся хетчбеки, седаны, универсалы, минивены"
          }
          imageCard="/imageCard.png"
          size={"L"}
        />
      </div>
    </div>
  );
};

export default ServiceCards;
