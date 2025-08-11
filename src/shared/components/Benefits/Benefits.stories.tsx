import Benefits from "@/shared/components/Benefits/Benefits";
import { listBenefits } from "@/widgets/listBenefits/listBenefits";

export default {
  title: "benefits",
};

export const BenefitsStories = () => {
  return (
    <Benefits
      title="Почему лучше работать с нами"
      description="Наша команда профессиональных водителей готова прийти на помощь 24 часа в сутки, 7 дней в неделю"
      listBenefits={listBenefits}
    />
  );
};
