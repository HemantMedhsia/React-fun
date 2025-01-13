import { useMemo } from "react";

export const FirefliesConfig = () => {
    return useMemo(
      () => ({
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffcc00",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.9,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            outModes: {
              default: "bounce",
            },
          },
        },
      }),
      [],
    );
  };
  