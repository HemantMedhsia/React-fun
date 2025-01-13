import { useMemo } from "react";

export const ThunderLightningConfig = () => {
  return useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Dark background for thunderstorm
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: [
            "#0C0F1A", // Dark Blue-Black
            "#1F1B24", // Deep Purple-Gray
            "#2C2C2C", // Charcoal Gray
            "#003638", // Dark Teal
            "#8FBC8F", "#F4A460", "#CD853F", "#FFDAB9"
          ],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true, // Flickering effect
        },
        size: {
          value: { min: 10, max: 200 }, // Varying particle size
          random: true,
        },
        move: {
          enable: true,
          speed: 10, // Fast-moving particles
          direction: "none",
          random: true,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "trail", // Lightning trail effect
          },
          onClick: {
            enable: true,
            mode: "explode", // Burst effect on click
          },
        },
        modes: {
          trail: {
            delay: 0.1,
            quantity: 5,
          },
          explode: {
            particles_nb: 10,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );
};
