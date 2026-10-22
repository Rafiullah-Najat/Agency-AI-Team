import assets from "../../public/image/assets";

export default function Footer({ theme }) {
  return (
    <footer className="relative flex flex-col items-center gap-7 px-4 pt-30 bg-indigo-100/10 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40">
      {/* top footer  */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={`./image/${theme === "dark" ? "logo_dark" : "logo"}.svg`}
            alt="logo"
            className="w-32 sm:w-44"
          />
          <p>
            From strategy to excution, We craft digital solutions that move your
            bussinis forward.
          </p>
          <ul className="flex gap-8">
            <li>
              <a href="#hero" className="hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-600">
                Service
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-indigo-600">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-indigo-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources , sent your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded
           dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-indigo-500 rounded text-white px-6">
              Subscribwe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
