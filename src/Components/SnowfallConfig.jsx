import { useMemo } from "react";

export const SnowfallConfig = () => {
    return useMemo(
      () => ({
        background: {
          color: {
            value: "#002b5c",
          },
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 2, max: 5 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: false,
            outModes: {
              default: "out",
            },
          },
        },
      }),
      [],
    );
  };
  