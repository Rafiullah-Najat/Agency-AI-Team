import assets from "../../public/image/assets.js";
import Title from "./Title";
import ServicesCard from "./ServicesCard";
import { motion } from "motion/react";

const servicesData = [
  {
    title: "Advrtising",
    description:
      "We turn your ideas into reality with our advertising services.",
    icons: assets.ads_icon,
  },
  {
    title: "Content Marketing",
    description: "We help execute your plan and deliver results.",
    icons: assets.marketing_icon,
  },
  {
    title: "Content Writing",
    description: "We help you create compelling content for your brand.",
    icons: assets.content_icon,
  },
  {
    title: "Social Media",
    description: "We help you build a strong social media presence.",
    icons: assets.social_icon,
  },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2, duration: 0.4 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <Title
        title={"How can we help you?"}
        description={
          "From strategy to execution, we craft digital solutions that move your business forward."
        }
      />
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute object-cover sm:w-1/2 -top-18 sm:-top-30 lg:-top-28 sm:left-20 dark:opacity-0"
      />
      <div className="flex flex-col md:grid  grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
