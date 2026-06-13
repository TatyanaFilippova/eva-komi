import { ServiceDetailData } from "../types";
import { serviceData as dalnie_perevozki_avtomobilej_iz_syktyvkara } from "./dalnie-perevozki-avtomobilej-iz-syktyvkara";
import { serviceData as evakuator_dlya_vnedorozhnikov_i_mikroavtobusov } from "./evakuator-dlya-vnedorozhnikov-i-mikroavtobusov";
import { serviceData as evakuator_dlya_gruzovyh_avtomobilej } from "./evakuator-dlya-gruzovyh-avtomobilej";
import { serviceData as evakuacziya_legkovyh_avtomobilej } from "./evakuacziya-legkovyh-avtomobilej";
import { serviceData as evakuacziya_mototehniki } from "./evakuacziya-mototehniki";
import { serviceData as pomoshh_pri_dtp } from "./pomoshh-pri-dtp";

export const servicesData: Record<string, ServiceDetailData> = {
  "dalnie-perevozki-avtomobilej-iz-syktyvkara": dalnie_perevozki_avtomobilej_iz_syktyvkara,
  "evakuator-dlya-vnedorozhnikov-i-mikroavtobusov": evakuator_dlya_vnedorozhnikov_i_mikroavtobusov,
  "evakuator-dlya-gruzovyh-avtomobilej": evakuator_dlya_gruzovyh_avtomobilej,
  "evakuacziya-legkovyh-avtomobilej": evakuacziya_legkovyh_avtomobilej,
  "evakuacziya-mototehniki": evakuacziya_mototehniki,
  "pomoshh-pri-dtp": pomoshh_pri_dtp,
};

export const serviceSlugs = Object.keys(servicesData);

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return servicesData[slug];
}