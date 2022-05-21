import React from "react";
import Particles from "react-tsparticles";

import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import "./Hero.css";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadBigCirclesPreset(tsParticles);
}

const Hero = () => {
  return (
    <div className="tsparticles">
      <Particles
        height={"30rem"}
        options={{
          preset: "big-circles",
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
        }}
        init={particlesInit}
      />
    </div>
  );
};

export default Hero;
