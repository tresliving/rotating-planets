// document.addEventListener('DOMContentLoaded', function() {
//     const planets = document.querySelectorAll('.planet');

//     setTimeout(function() {
//         planets.forEach(planet => {
//             planet.style.animation = 'orbit 20s linear infinite';
//         });
//     }, 3000); // Delay before starting the orbit animation
// });

document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');
    const totalPlanets = planets.length; // Number of planets
    const orbitDuration = 120; // Duration of one full orbit in seconds
    const staggerFraction = 1 / totalPlanets; // Fraction of the orbit to stagger each planet

    planets.forEach((planet, index) => {
        // Calculate the delay based on the index
        let animationDelay = -orbitDuration * staggerFraction * index;

        planet.style.animation = `orbit ${orbitDuration}s linear infinite ${animationDelay}s`;
    });
});