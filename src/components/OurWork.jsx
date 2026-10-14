import assets from "../../public/image/assets.js";

import Title from "./Title";

const WorkData = [
  {
    title: "Mobile App Development",
    description: "We turn bold ideas into powerful digital solutions.",
    image: assets.work_mobile_app,
  },
  {
    title: "Dashboard Management",
    description: "We help you excute your plan and deliver results.",
    image: assets.work_dashboard_management,
  },
  {
    title: "Fitness App promotion",
    description: "We help you create a marketing strategy that drives results.",
    image: assets.work_fitness_app,
  },
];
export default function OurWork() {
  return (
    <section
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        description="From Sterategy to excution, we craft digital solutions that move your business forward."
      />
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {WorkData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />

            <h3 className=" mt-3 mb-2 text-lg font-bold ">{work.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
