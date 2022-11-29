particlesJS("particles-js", {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 5,
        color: "#ffffff6b",
      },
      polygon: {
        nb_sides: 12,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.01,
      random: true,
      anim: {
        enable: false,
        speed: 0.9744926547616141,
        opacity_min: 0.15429467033725558,
        sync: true,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 252.52724532232722,
      color: "#ffffff",
      opacity: 0.09469771699587272,
      width: 2,
    },
    move: {
      enable: true,
      speed: 10,
      direction: "top",
      random: true,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 287.7122877122877,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 335.6643356643357,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
