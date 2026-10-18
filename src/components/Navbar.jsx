import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

function MenuIcon({ open }) {
  return open ? (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

const navigation = [
  {
    id: 1,
    label: "Home",
    link: "home",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Our Work",
    link: "our-work",
  },
  {
    id: 4,
    label: "Contact Us",
    link: "contact-us",
  },
];

export default function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24  py-3 lg:py-5 border-b-2 border-b-gray-300
      sticky top-0 z-20 backdrop-blur-xl font-meduim bg-white/50 dark:bg-gray-900/70"
      >
        <div>
          <img
            src={`./image/${theme === "dark" ? "logo_dark" : "logo"}.svg`}
            alt="logo"
            className="w-24 sm:w-32 lg:w-38 "
          />
        </div>

        <nav className="hidden xl:block">
          <ul className="text-gray-700 dark:text-white sm:text-sm flex gap-8 2xl:gap-20">
            {navigation.map((item) => (
              <li
                key={item.id}
                className="relative cursor-pointer text-sm font-semibold pb-1.5 transition hover:text-indigo-600 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:rounded-full after:bg-indigo-600  after:transition-[width] after:duration-300 hover:after:w-full"
              >
                <a href={`#${item.link}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 sm:gap-3 items-center">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid size-9 place-items-center cursor-pointer rounded-full text-slate-700 transition hover:bg-slate-100 dark:text-amber-300 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? (
              <BiSun className="size-5" />
            ) : (
              <BiMoon className="size-5" />
            )}
          </button>
          <button
            type="button"
            className="group inline-flex h-8 sm:h-10 cursor-pointer items-center gap-2 rounded-full bg-indigo-600 pl-4 pr-1.5 text-[12px] sm:text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 active:translate-y-0 focus-visi focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            <span>Connect</span>
            <span className="grid size-5 sm:size-7 place-items-center rounded-full bg-white/10">
              <IoIosArrowRoundForward className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="grid size-10 place-items-center rounded-lg text-slate-700 transition hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800 xl:hidden"
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
        <nav
          className={`overflow-hidden absolute top-16 w-full left-0 z-100 border-t border-slate-100 bg-white transition-[max-height] duration-300 dark:border-slate-700 dark:bg-gray-900 xl:hidden ${isMenuOpen ? "max-h-74" : "max-h-0 border-t-0"}`}
        >
          <ul className="text-gray-700 dark:text-white flex flex-col space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <li
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800"
              >
                <a href={`#${item.link}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
