import anime from 'animejs';

// Animation code!
anime.timeline({loop: false})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 2],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 700
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 700,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 700,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  })
  .add({
    targets : '.hero',
    opacity: 0,
    duration: 2000
  })
  .add({
    targets : '.hero',
    display: 'none'
  }
  )
  
  ;

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});