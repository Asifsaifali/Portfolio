import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleNew = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
   <Particles
   id="tsparticles"
             init={particlesInit}
             loaded={particlesLoaded}
             options={{
               
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      area: 800
                    }
                  },
                  color: {
                    value: "#0000"
                  },
                  shape: {
                    type: "circle"
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    animation: {
                      enable: false,
                      speed: 1,
                      minimumValue: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 15,
                    random: {
                      enable: true,
                      minimumValue: 10
                    },
                    animation: {
                      enable: false,
                      speed: 40,
                      minimumValue: 0.1,
                      sync: false
                    }
                  },
                  lineLinked: {
                    enable: false,
                    distance: 150,
                    color: "#0000",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    bounce: true,
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "bounce",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  events: {
                    onHover: {
                      enable: false,
                      mode: "repulse",
                      parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10
                      }
                    },
                    onClick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                detectRetina: true,
                background: {
                  color: "#fff",
                  image: "",
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover"
                }
              }
             }
   />
  )
}

export default ParticleNew