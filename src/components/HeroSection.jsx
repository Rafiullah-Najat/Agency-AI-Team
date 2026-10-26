import assets from "../../public/image/assets.js";
import { motion } from "motion/react";

const { group_profile, hero_img, bgImage1, bgImage2 } = assets;
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f3f4f6] px-5 pt-7 pb-12 text-center text-slate-900 dark:bg-slate-950 dark:text-white sm:px-10 sm:pt-10 sm:pb-16"
    >
      <div
        className="absolute top-[40%] left-[-14%] h-[54vw] max-h-180 w-[68vw] max-w-250 -translate-y-1/2 opacity-70 blur-[10px]"
        aria-hidden="true"
      >
        <img
          className="h-full w-full object-cover opacity-90"
          src={bgImage1}
          alt=""
        />
      </div>
      <div
        className="absolute top-[34%] right-[-16%] h-[54vw] max-h-180 w-[68vw] max-w-250 -translate-y-1/2 opacity-80 blur-[10px]"
        aria-hidden="true"
      >
        <img
          className="h-full w-full object-contain sm:object-cover opacity-90"
          src={bgImage2}
          alt=""
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/15 bg-white/60 py-2 pr-4 pl-2.5 shadow-lg shadow-slate-900/4 backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/60"
        >
          <img
            className="h-7 rounded-full border-2 border-white/90 object-cover"
            src={group_profile}
            alt=""
          />

          <span className="text-[10px] font-semibold tracking-[-0.02em] text-slate-700 dark:text-slate-200 sm:text-sm">
            Trusted by 10k+ people
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="m-0 text-slate-900  font-semibold text-[clamp(1.5rem,5.5vw,12rem)] lg:leading-23 dark:text-white "
        >
          <span className="block">Turning imagination into</span>
          <span className="block bg-linear-to-r from-indigo-600 via-blue-500 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(92,126,255,0.12)]">
            digital impact
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto text-[10px] mt-5 max-w-130 text-base text-slate-700/75 dark:text-slate-300/80 sm:mt-6 sm:text-lg"
        >
          Creating meaningful connections and turning big ideas into interactive
          digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-10 w-[min(80vw,800px)] overflow-hidden rounded-[1.7rem] border border-slate-900/10 bg-blue-100 shadow-[0_25px_60px_rgba(80,100,140,0.12)] dark:border-white/10 dark:bg-slate-800 sm:mt-12 sm:w-[min(80vw,1200px)] "
        >
          <img
            className="h-75 w-full object-cover sm:h-[min(39vw,520px)]"
            src={hero_img}
            alt="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
