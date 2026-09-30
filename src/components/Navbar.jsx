export default function Navbar({ theme, setTheme }) {
  return (
    <>
      <section
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 
      sticky top-0 z-20 backdrop-blur-xl font-meduim bg-white/50 dark:bg-gray-900/70"
      >
        <img
          src={`./image/${theme === "dark" ? "logo_dark" : "logo"}.svg`}
          alt="logo"
          className="w-32 sm:w-40"
        />

        <div>
          <ul
            className="text-gray-700 dark:text-white sm:text-sm 
          "
          >
            <li className="sm:hover:border-b">
              <a href="#">Home</a>
            </li>
            <li className="sm:hover:border-b">
              <a href="#services">Services</a>
            </li>
            <li className="sm:hover:border-b">
              <a href="#our-work">Our Work</a>
            </li>
            <li className="sm:hover:border-b">
              <a href="#contact-us">Contact US</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
