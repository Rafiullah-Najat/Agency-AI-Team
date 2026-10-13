import { useRef, useState } from "react";

export default function ServicesCard({ service, index }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl
    border border-gray-200 dark:border-gray-700 transition-colors shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-400 to-purple-500
       w-75 h-75 absolute z-0 transition-opacity duration-500 ${visible ? "opacity-70" : "opacity-0"}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />
      <div
        className=" flex items-center z-10 gap-10 p-8 hover:p-7.5 hover:m-0.5 
        transition-all rounded-[10px] bg-white dark:bg-gray-900 relative"
      >
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full ">
          <img
            src={service.icons}
            alt="Service Icon"
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
