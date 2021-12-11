// Scroll Reveal Animation //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

// Scroll About //
sr.reveal('.about-h2', {origin: 'bottom', delay: 100})
sr.reveal('.about-para', {origin: 'bottom', delay: 200})

// Scroll Char //
sr.reveal('.char-h2', {origin: 'bottom', delay: 100})
sr.reveal('.char-para', {origin: 'bottom', delay: 200})
sr.reveal('.char-link', {origin: 'bottom', delay: 300})
sr.reveal('.linda-b', {origin: 'bottom', delay: 400})

// Scroll Ghost //
sr.reveal('.ghost-h2', {origin: 'bottom', delay: 200})
sr.reveal('.ghost-para', {origin: 'bottom', delay: 300})
sr.reveal('.ghost-link', {origin: 'bottom', delay: 400})
sr.reveal('.ghost-a', {origin: 'bottom', delay: 100})

// Scroll Gameplay //
sr.reveal('.game-h2', {origin: 'bottom', delay: 100})
sr.reveal('.game-h3', {origin: 'bottom', delay: 200})
sr.reveal('.game-para', {origin: 'bottom', delay: 300})
sr.reveal('.warn', {origin: 'bottom', delay: 400})
sr.reveal('.game', {origin: 'bottom', delay: 500})

// Scroll Gallery //
sr.reveal('.gallery-h2', {origin: 'bottom', delay: 100})
sr.reveal('.gallery-h3', {origin: 'bottom', delay: 200})
sr.reveal('.gallery-item', {origin: 'bottom', delay: 100, interval: 100})
sr.reveal('.concept', {origin: 'bottom', delay: 200})