import { useMemo } from "react";

export const GalaxyConfig = () => {
    return useMemo(
      () => ({
        background: {
          color: {
            value: "#0d0d0d",
          },
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1000,
            },
          },
          
          color: {
            value: ["#ff0000", "#00ff00", "#0000ff", "#ffffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            outModes: {
              default: "out",
            },
          },
        },
      }),
      [],
    );
  };
  