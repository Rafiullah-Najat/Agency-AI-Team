import { motion } from "motion/react";

export default function Title({ title, description }) {
  return (
    <div className="z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-medium sm:text-[42px] text-center mb-5 text-gray-800 dark:text-white"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
        className="w-full px-9 sm:px-2 sm:max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
      >
        {description}
      </motion.p>
    </div>
  );
}
