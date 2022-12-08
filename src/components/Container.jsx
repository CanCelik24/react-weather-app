import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ThemeContext from "../contexts/ThemeContext";
import { SelectContextProvider } from "../contexts/SelectContext";
import { WeatherContextProvider } from "../contexts/WeatherContext";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <SelectContextProvider>
        <WeatherContextProvider>
          <Header />
          <Main />
          <Footer />
        </WeatherContextProvider>
      </SelectContextProvider>
    </div>
  );
}

export default Container;
