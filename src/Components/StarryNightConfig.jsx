import { useMemo } from "react";

export const StarryNightConfig = () => {
    return useMemo(
      () => ({
        background: {
          color: {
            value: "#001d3d",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100,
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
            value: 0.7,
          },
          size: {
            value: { min: 1, max: 2 },
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
  