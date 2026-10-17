export const METRIKA_ID = 93501283;

/**
 * Цели Яндекс Метрики (JS-события). Каждую нужно создать в Метрике:
 * Настройки → Цели → JavaScript-событие, идентификатор = значение ниже.
 */
export const GOALS = {
  /** Любой целевой контакт: звонок или ВК (главная цель сайта) */
  lead: "lead",
  /** Клик по номеру телефона (tel:) */
  callClick: "call_click",
  /** Клик по ссылке на ВК */
  vkClick: "vk_click",
  /** Клик «Вызвать эвакуатор» (скролл к блоку контактов) */
  ctaClick: "cta_click",
  /** Блок «Как вызвать эвакуатор» показан пользователю */
  callBlockView: "call_block_view",
  scroll50: "scroll_50",
  scroll90: "scroll_90",
  /** 15 секунд активного времени на странице */
  engaged15: "engaged_15s",
} as const;

export type Goal = (typeof GOALS)[keyof typeof GOALS];

type Ym = (id: number, method: string, ...args: unknown[]) => void;

export function reachGoal(goal: Goal, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const ym = (window as unknown as { ym?: Ym }).ym;
  if (!ym) return;
  try {
    ym(METRIKA_ID, "reachGoal", goal, params);
  } catch {
    // аналитика не должна ломать сайт
  }
}

export function sendHit(url: string) {
  if (typeof window === "undefined") return;
  const ym = (window as unknown as { ym?: Ym }).ym;
  if (!ym) return;
  try {
    ym(METRIKA_ID, "hit", url);
  } catch {
    // аналитика не должна ломать сайт
  }
}
