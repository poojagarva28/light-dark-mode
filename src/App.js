import { createContext, useState } from "react";
import "./App.css";
import ReactSwitch from "react-switch";
import Child from "./Child";

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="outerdiv" id={theme}>
        <Child />
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
    </themeContext.Provider>
  );
}

export default App;
