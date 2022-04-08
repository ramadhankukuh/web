/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.username', {delay: 200})
sr.reveal('.style', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.titulo-sep', {delay: 500})
sr.reveal('.new', {origin:'right', delay: 300})
sr.reveal('.uteis', {delay: 400})
sr.reveal('.header', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})
