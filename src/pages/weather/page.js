import React from "react";
import styles from "./style.css";


export default class WeatherPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>Weather</h1>
        <p className={styles.welcomeText}>Weather!</p>
      </div>
    );
  }
}
