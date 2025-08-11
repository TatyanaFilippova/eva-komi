// Marquee.tsx
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

interface RunningLineProps {
  text: string;
  duration?: number;
}

const RunningLine = ({ text, duration = 30 }: RunningLineProps) => {
  // 4 копии текста для идеальной плавности
  const content = (
    <>
      <span className={styles.item}>{text}</span>
      <span className={styles.item}>{text}</span>
      <span className={styles.item}>{text}</span>
      <span className={styles.item}>{text}</span>
    </>
  );

  return (
    <div className={styles.container}>
      {/* Верхняя строка (влево) */}
      <motion.div
        className={`${styles.track} ${styles.top}`}
        animate={{
          x: ["0%", "-75%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration,
            ease: "linear",
          },
        }}
      >
        {content}
      </motion.div>

      {/* Нижняя строка (вправо) */}
      <motion.div
        className={`${styles.track} ${styles.bottom}`}
        animate={{
          x: ["-75%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: duration * 1.3,
            ease: "linear",
          },
        }}
      >
        {content}
      </motion.div>
    </div>
  );
};

export default RunningLine;
