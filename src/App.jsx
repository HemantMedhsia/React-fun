import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticlesLoader from "./Components/ParticlesLoader";
import ParticlesConfig from "./Components/ParticlesConfig";
import { GalaxyConfig } from "./Components/GalaxyConfig";
import { StarryNightConfig } from "./Components/StarryNightConfig";
import { SnowfallConfig } from "./Components/SnowfallConfig";
import { FirefliesConfig } from "./Components/FirefliesConfig";
import { BubbleDanceConfig } from "./Components/BubbleDanceConfig";
import ProjectGallery from "./Pages/ProjectGallery";
import { ThunderLightningConfig } from "./Components/ThunderLightningConfig";
import "./App.css";
import PasswordGenerator from "./Pages/PasswordGenerator";
import CurrencyConverter from "./Pages/CurrencyConverter";

const App = () => {
  const options1 = ParticlesConfig();
  // const options = GalaxyConfig();
  // const options = StarryNightConfig();
  // const options = SnowfallConfig();
  // const options = FirefliesConfig();
  // const options = BubbleDanceConfig();
  const options = ThunderLightningConfig();

  return (
    <Router>
      <div className=" flex justify-center items-center bg-gradient-to-br min-h-screen from-purple-800 via-black to-gray-900">
        <ParticlesLoader options={options} id={"particles-1"} />
        {/* <ParticlesLoader options={options1} id="particles-2" /> */}
        <Routes>
          <Route path="/" element={<ProjectGallery />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
