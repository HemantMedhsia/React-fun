import { useMemo } from "react";

export const BubbleDanceConfig = () => {
    return useMemo(
      () => ({
        background: {
          color: {
            value: "#f0f8ff",
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#00bcd4", "#ff4081", "#8bc34a"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 10, max: 20 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
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
  