import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
