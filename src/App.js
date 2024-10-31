import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer className="footer">
          This project is coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/83802-josephine-lu-ching-jacobs"
            target="_blank"
            rel="noreferrer"
          >
            Josephine Jacobs{" "}
          </a>
          and is open-sourced code on{" "}
          <a
            href="https://github.com/JosephineJacobs/weather-create-app-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , hosted by{" "}
          <a
            href="https://weatherappfinaljj.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
