import {useContext} from "react";
import { useWeather } from "../contexts/WeatherContext";
import darkLoading from '../img/darkLoading.gif';
import ThemeContext from "../contexts/ThemeContext";



function Main() {
  const { hour, days, icons, temps } = useWeather();
  const { theme } = useContext(ThemeContext);
    
  let loading = true;
  if (temps[0].temp_max !== "-273") {
    loading = false;
  }

return (
  <div className="Main">
    {loading && <img src={darkLoading} alt="" className="loading" />}
    {!loading && (
      <>
        <div className={`dailyWeather today ${theme}`}>
          <p>{days[0]}</p>
          <p>{hour}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icons[0]}@2x.png`}
            alt=""
          />
          <div>
            <span>{temps[0].temp_max}º</span>
            <span>{temps[0].temp_min}º</span>
          </div>
        </div>
        <div className={`dailyWeather ${theme}`}>
          <p>{days[1]}</p>
          <p>{hour}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icons[1]}@2x.png`}
            alt=""
          />
          <div>
            <span>{temps[1].temp_max}º</span>
            <span>{temps[1].temp_min}º</span>
          </div>
        </div>
        <div className="dailyWeather">
          <p>{days[2]}</p>
          <p>{hour}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icons[2]}@2x.png`}
            alt=""
          />
          <div>
            <span>{temps[2].temp_max}º</span>
            <span>{temps[2].temp_min}º</span>
          </div>
        </div>
        <div className="dailyWeather">
          <p>{days[3]}</p>
          <p>{hour}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icons[3]}@2x.png`}
            alt=""
          />
          <div>
            <span>{temps[3].temp_max}º</span>
            <span>{temps[3].temp_min}º</span>
          </div>
        </div>
        <div className="dailyWeather">
          <p>{days[4]}</p>
          <p>{hour}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icons[4]}@2x.png`}
            alt=""
          />
          <div>
            <span>{temps[4].temp_max}º</span>
            <span>{temps[4].temp_min}º</span>
          </div>
        </div>
      </>
      )}
  </div>
);
}

export default Main;
