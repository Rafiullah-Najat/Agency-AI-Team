import assets from "../../public/image/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

export default function ContactUS() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0c5e74bb-a1bb-4639-9ac4-062bf25a52eb");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white mb-10"
    >
      <Title
        title={"Reach out to us"}
        description={
          "From strategy to excution, we craft digital solutions that mover your business forward."
        }
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        action=""
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full "
        onSubmit={onSubmit}
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="perso_icon" />
            <input
              type="text"
              name="name"
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
              required
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
      </motion.form>
    </motion.section>
  );
}
