import React, { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";

function Particle() {
  useEffect(() => {
    tsParticles.load("#tsparticles", {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        links: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.05,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      detectRetina: true,
    });
  }, []);

  return <div id="tsparticles" />;
}

export default Particle;
