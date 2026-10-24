import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState("light");

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Refs for custom cursor position racking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px,0 )`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px ,0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect for toggle theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-slate-950">
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection />
      <Companies />
      <Services />
      <OurWork />
      <Team />
      <ContactUS />
      <Footer theme={theme} />

      {/* Cosutome Cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-indigo-500 pointer-events-none z-9999"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 bg-indigo-500 rounded-full pointer-events-none z-9999"
      ></div>
    </div>
  );
}

export default App;
