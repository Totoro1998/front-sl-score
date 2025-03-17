import "./App.css";

import { useEffect } from "react";
import { getSerwist } from "virtual:serwist";
import "@khmyznikov/pwa-install";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

function App() {
  useEffect(() => {
    const loadSerwist = async () => {
      if ("serviceWorker" in navigator) {
        const serwist = await getSerwist();
        serwist?.addEventListener("installed", () => {
          console.log("Serwist installed!");
        });
        void serwist?.register();
      }
    };
    loadSerwist();
  });

  useEffect(() => {
    const installBtn = document.getElementById("installBtn");
    installBtn.addEventListener("click", () => {
      const pwaInstall = document.getElementsByTagName("pwa-install")[0];
      console.log("pwaInstall", pwaInstall);
      pwaInstall.showDialog();
    });
  }, []);

  return (
    <>
      <div>
        <pwa-install manual-apple="true" manual-chrome="true"></pwa-install>
        <button id="installBtn">安装 PWA</button>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Serwist</h1>
    </>
  );
}

export default App;
