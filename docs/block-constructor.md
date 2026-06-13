# BlockConstructor — компоненты и типы

Конструктор страниц: `src/shared/components/BlockConstructor/BlockConstructor.tsx`.

Принимает массив блоков `blocks: Blocks` и по полю `__typename` (и для карточек — по `variant`) рендерит нужный UI-компонент.

Типы экспортируются из того же файла:

```ts
import { Blocks, Block, BlockListItem, FaqItem } from "@/shared/components/BlockConstructor/BlockConstructor";
```

Константы с блоками типизируются через `satisfies Blocks`:

```ts
export const homeBlocks = [ /* ... */ ] satisfies Blocks;
```

---

## Общие типы

### `Blocks`

```ts
type Blocks = Block[];
```

Массив блоков страницы. Порядок элементов = порядок секций на странице.

### `BlockListItem`

Элемент списка карточек (`ComponentEvaKomiServiceCards`).

| Поле          | Тип                 | Обязательное | Описание                                      |
|---------------|---------------------|--------------|-----------------------------------------------|
| `title`       | `string`            | да           | Заголовок карточки                            |
| `description` | `string`            | да           | Текст карточки                                |
| `image`       | `{ url: string }`   | да           | Путь к изображению (обычно `/images/...`)     |
| `size`        | `string`            | нет          | Размер карточки: `"s"`, `"m"`, `"l"`          |
| `link`        | `string \| null`    | нет          | Ссылка или `"#CallTruck"` для вызова эвакуатора |

### `FaqItem`

Элемент FAQ (`ComponentEvaKomiFaq`).

| Поле       | Тип      | Обязательное |
|------------|----------|--------------|
| `question` | `string` | да           |
| `answer`   | `string` | да           |

---

## Блоки конструктора

### 1. `ComponentEvaKomiText`

**UI-компонент:** `DescriptionHorizontal`

**Назначение:** текстовая секция с заголовком и многострочным контентом.

| Поле      | Тип      | Обязательное |
|-----------|----------|--------------|
| `__typename` | `"ComponentEvaKomiText"` | да |
| `title`   | `string` | да           |
| `content` | `string` | да           |

Переносы строк в `content` через `\n`. Поддерживаются template literals для подстановки цен и констант.

**Пример:**

```ts
{
  __typename: "ComponentEvaKomiText",
  title: "Стоимость эвакуации в Сыктывкаре",
  content: `Базовый тариф — ${PRICES.legkovoy}.\n\n${PRICE_DISCLAIMER}`,
}
```

**Где используется:** главная, страница услуг, детальные страницы услуг.

---

### 2. `ComponentEvaKomiBigCenterText`

**UI-компонент:** `BlockTextServices`

**Назначение:** крупный центрированный текстовый блок без списка карточек.

| Поле      | Тип      | Обязательное |
|-----------|----------|--------------|
| `__typename` | `"ComponentEvaKomiBigCenterText"` | да |
| `title`   | `string` | да           |

В `title` можно передавать несколько абзацев через `\n\n`.

**Пример:**

```ts
{
  __typename: "ComponentEvaKomiBigCenterText",
  title: "Компания «Эва Коми» предоставляет полный комплекс услуг...\n\nМы работаем по всему региону...",
}
```

**Где используется:** страница `/services/`.

---

### 3. `ComponentEvaKomiServiceCards`

**UI-компонент:** зависит от `variant` (см. ниже).

**Назначение:** секция с заголовком, опциональным описанием и списком карточек.

| Поле          | Тип               | Обязательное |
|---------------|-------------------|--------------|
| `__typename`  | `"ComponentEvaKomiServiceCards"` | да |
| `title`       | `string`          | да           |
| `description` | `string`          | нет          |
| `variant`     | `string`          | да           |
| `list`        | `BlockListItem[]` | да           |

#### Варианты `variant`

| `variant`               | UI-компонент     | Описание |
|-------------------------|------------------|----------|
| `"services"`            | `ServiceCards`   | Карточки услуг с изображениями и опциональными ссылками. Размер карточки — через `size`. |
| `"advantages"`          | `Benefits`       | Блок преимуществ / тарифов. Используются `title`, `description`, `image`. Поля `size` и `link` игнорируются. |
| `"services_transparent"`| `EvacuationСards`| Прозрачные карточки эвакуации со ссылками. Если `link` не задан — подставляется `"#CallTruck"`. |

**Пример (`services`):**

```ts
{
  __typename: "ComponentEvaKomiServiceCards",
  title: "Какие проблемы мы решаем",
  description: "Краткое описание секции",
  variant: "services",
  list: [
    {
      title: "Эвакуация легковых автомобилей",
      description: "Седаны, хетчбеки, универсалы...",
      link: "/services/evakuacziya-legkovyh-avtomobilej/",
      size: "m",
      image: { url: "/images/image_36_17852407c3.png" },
    },
  ],
}
```

**Пример (`advantages`):**

```ts
{
  __typename: "ComponentEvaKomiServiceCards",
  title: "Почему выбирают нас",
  variant: "advantages",
  list: [
    {
      title: "Оперативный выезд",
      description: RESPONSE_TIME,
      image: { url: "/images/1_572e0e87cd.png" },
    },
  ],
}
```

**Пример (`services_transparent`):**

```ts
{
  __typename: "ComponentEvaKomiServiceCards",
  title: "Профессиональная эвакуация транспорта",
  description: "Бережная перевозка...",
  variant: "services_transparent",
  list: [
    {
      title: "Эвакуатор для легковых автомобилей",
      description: "Аккуратная перевозка...",
      link: "/services/evakuacziya-legkovyh-avtomobilej/",
      image: { url: "/images/image_36_17852407c3.png" },
    },
  ],
}
```

**Где используется:** главная, страница услуг, детальные страницы услуг (`/services/[slug]/`).

> Неизвестный `variant` не рендерится (конструктор вернёт `null` для этого блока).

---

### 4. `ComponentEvaKomiFaq`

**UI-компонент:** `Faq`

**Назначение:** секция «Частые вопросы» (разметка `dl` / `dt` / `dd`, заголовок — `h2`).

| Поле         | Тип         | Обязательное |
|--------------|-------------|--------------|
| `__typename` | `"ComponentEvaKomiFaq"` | да |
| `title`      | `string`    | да           |
| `list`       | `FaqItem[]` | да           |

**Пример:**

```ts
{
  __typename: "ComponentEvaKomiFaq",
  title: "Частые вопросы",
  list: [
    {
      question: "Сколько стоит эвакуатор?",
      answer: `${PRICES.legkovoy}. ${PRICE_DISCLAIMER}`,
    },
  ],
}
```

**SEO:** блоки FAQ внутри `blocks` участвуют в JSON-LD Schema через `src/utils/seo/faqSchema.tsx` (`getFaqItemsFromBlocks`).

**Где используется:** главная, страница услуг, детальные страницы услуг.

> На страницах `/prices/` и `/about/` компонент `Faq` подключается напрямую, без BlockConstructor.

---

## Сводная таблица

| `__typename`                    | React-компонент        | Ключевые поля                          |
|---------------------------------|------------------------|----------------------------------------|
| `ComponentEvaKomiText`          | `DescriptionHorizontal`| `title`, `content`                     |
| `ComponentEvaKomiBigCenterText` | `BlockTextServices`    | `title`                                |
| `ComponentEvaKomiServiceCards`  | см. `variant`          | `title`, `description?`, `variant`, `list` |
| `ComponentEvaKomiFaq`           | `Faq`                  | `title`, `list`                        |

---

## Union-тип `Block`

```ts
type Block =
  | { __typename: "ComponentEvaKomiText"; title: string; content: string }
  | { __typename: "ComponentEvaKomiBigCenterText"; title: string }
  | {
      __typename: "ComponentEvaKomiServiceCards";
      title: string;
      description?: string;
      variant: string;
      list: BlockListItem[];
    }
  | { __typename: "ComponentEvaKomiFaq"; title: string; list: FaqItem[] };
```

---

## Файлы с данными блоков

| Файл | Страница |
|------|----------|
| `src/constants/homeBlocks.ts` | Главная `/` |
| `src/constants/servicesPageBlocks.ts` | `/services/` |
| `src/constants/services/*Blocks.ts` | `/services/[slug]/` |

Общие цены и дисклеймеры: `src/constants/pricing.ts` (`PRICES`, `PRICE_DISCLAIMER`, `RESPONSE_TIME`).
