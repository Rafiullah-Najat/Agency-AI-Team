export default function Title({ title, description }) {
  return (
    <div className="z-10">
      <h2 className="text-3xl font-medium sm:text-[42px] text-center mb-5 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="w-full px-9 sm:px-2 sm:max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
        {description}
      </p>
    </div>
  );
}
