"use client";
import styles from "./styles.module.scss";

export type FaqItem = {
  question: string;
  answer: string;
};

interface FaqProps {
  title: string;
  items: FaqItem[];
}

const Faq = ({ title, items }: FaqProps) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <dl className={styles.list}>
      {items.map((item) => (
        <div key={item.question} className={styles.item}>
          <dt className={styles.question}>{item.question}</dt>
          <dd className={styles.answer}>{item.answer}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Faq;
