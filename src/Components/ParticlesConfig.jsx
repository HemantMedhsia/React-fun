import { useMemo } from "react";

const ParticlesConfig = () => {
  return useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value:["#ff0000", "#00ff00", "#0000ff", "#ffffff"],
        },
        links: {
          color: {
            value:  ["#00ff00"],
          },
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 12,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 0.5,
        },
        z: {
        value: 50,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 0},
        },
      },
      detectRetina: true,
    }),
    [],
  );
};

export default ParticlesConfig;
