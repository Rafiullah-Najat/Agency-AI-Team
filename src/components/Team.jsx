import { teamData } from "../../public/image/assets";
import Title from "./Title";

export default function Team() {
  return (
    <section className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <Title
        title={"Meet the team"}
        description={
          "A passinate team for digital experts dedicated to your brands success. "
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700
           bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-300"
          >
            <img
              src={member.image}
              alt="member-image"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs opacity-60">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
