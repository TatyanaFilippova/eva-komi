"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GOALS, reachGoal, sendHit } from "@/utils/analytics/goals";

const PLACE_ATTR = "data-place";

function getPlace(el: Element): string {
  return el.closest(`[${PLACE_ATTR}]`)?.getAttribute(PLACE_ATTR) ?? "other";
}

/**
 * Глобальный трекинг целей: клики по звонку/ВК/CTA, показ блока контактов,
 * глубина скролла, вовлечённость и хиты при клиентской навигации.
 */
export default function Tracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Next.js не перезагружает страницу при переходах — шлём хит вручную,
  // иначе Метрика видит только первую страницу визита.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    sendHit(window.location.href);
  }, [pathname]);

  // Клики по целевым ссылкам (делегирование)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const place = getPlace(link);
      const page = window.location.pathname;

      if (href.startsWith("tel:")) {
        const params = { place, page, number: href.replace("tel:", "") };
        reachGoal(GOALS.callClick, params);
        reachGoal(GOALS.lead, { ...params, type: "call" });
      } else if (href.includes("vk.com")) {
        const params = { place, page };
        reachGoal(GOALS.vkClick, params);
        reachGoal(GOALS.lead, { ...params, type: "vk" });
      } else if (href.includes("#CallTruck")) {
        reachGoal(GOALS.ctaClick, { place, page });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Показ блока «Как вызвать эвакуатор», глубина скролла, вовлечённость
  useEffect(() => {
    const fired = new Set<string>();
    const once = (goal: (typeof GOALS)[keyof typeof GOALS]) => {
      if (fired.has(goal)) return;
      fired.add(goal);
      reachGoal(goal, { page: window.location.pathname });
    };

    let observer: IntersectionObserver | undefined;
    const callBlock = document.getElementById("CallTruck");
    if (callBlock && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((en) => en.isIntersecting)) {
            once(GOALS.callBlockView);
            observer?.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(callBlock);
    }

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      if (pct >= 50) once(GOALS.scroll50);
      if (pct >= 90) once(GOALS.scroll90);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 15 секунд, пока вкладка видима
    let visibleMs = 0;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") visibleMs += 1000;
      if (visibleMs >= 15000) {
        once(GOALS.engaged15);
        window.clearInterval(timer);
      }
    }, 1000);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
  }, [pathname]);

  return null;
}
