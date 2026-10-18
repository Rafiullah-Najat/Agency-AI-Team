import assets from "../../public/image/assets";
import Title from "./Title";

export default function ConcatUs() {
  return (
    <section
      id="concat-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white mb-10"
    >
      <Title
        title={"Reach out to us"}
        description={
          "From strategy to excution, we craft digital solutions that mover your business forward."
        }
      />
      <form
        action=""
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full "
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="perso_icon" />
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="emai_icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              requireds
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message "
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-indigo-600 text-white text-sm px-10 py-3 rounded-full cursor-pointer
           hover:scale-103 transition-all duration-200"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-4" />
        </button>
      </form>
    </section>
  );
}
