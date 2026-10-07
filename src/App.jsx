import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <div className="relative min-h-screen bg-white dark:bg-black">
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
