import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUS from "./components/ContactUS";
function App() {
  const [theme, setTheme] = useState("light");

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
    </div>
  );
}

export default App;
