import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Switch } from "antd";
import { useSelect } from "../contexts/SelectContext";
import cities from "../data/cities_of_turkey.json";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setSelect } = useSelect();
  const handleChange = (e) => setSelect(e.target.value);

  return (
    <div className="header">
      <h1>Weather App</h1>
      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        default={localStorage.getItem("theme")}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="themeBtn"
      />
      <br />
      <label htmlFor="select">City </label>
      <select id="select" onChange={handleChange} defaultValue="İstanbul">
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <br /><br />
    </div>
  );
}

export default Header;
