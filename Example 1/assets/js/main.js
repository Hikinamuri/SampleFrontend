const backgroundDiv     = document.getElementById(`main`);
const navigationMenu    = document.getElementById(`navigation`);
const navigationWrapper = document.querySelectorAll(`#navigation .wrapper`);
const containers        = document.querySelectorAll(`.container`);

const starCount         = 25;
const cometCount        = 5;
const cometToStarsRatio = starCount / cometCount;

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle(`show`, entry.isIntersecting);
    })},
    {threshold: 0.3}
);

containers.forEach((el) => observer.observe(el));

document.addEventListener(`click`, function(e) {
    console.log(e);
    // Navigation Menu
    if (e.target.id == `wrapper-button`) {
        navigationMenu.classList.toggle(`on`);
    } else 
    if (!navigationMenu.contains(e.target)) {
        navigationMenu.classList.remove(`on`);
        navigationWrapper.forEach(element => {
            element.classList.remove(`on`);
        });
    };

    if (navigationMenu.classList.contains(`on`)) {
        navigationMenu.style.maxHeight = `${navigationMenu.scrollHeight + 40}px`;
    } else {
        navigationMenu.style.maxHeight = `0px`;
    };

    // Navigation wrapper
    navigationWrapper.forEach(element => {
        let wrapperList = element.querySelector(`.wrapper-list`);
        
        if (e.target == element) {
            e.target.classList.toggle(`on`);
        } else
        if (!element.contains(e.target)) {
            element.classList.remove(`on`);
        }

        if (element.classList.contains(`on`)) {
            wrapperList.style.maxHeight = `${wrapperList.scrollHeight + 40}px`;
            navigationMenu.style.maxHeight = `${navigationMenu.scrollHeight + wrapperList.scrollHeight + 40}px`;
        } else {
            wrapperList.style.maxHeight = `0px`;
        }
    });
});


for (let i = 0; i < starCount; i++) {
    let star = document.createElement(`div`);

    let x       = Math.random() * 99;
    let y       = Math.random() * 99;
    let delay   = Math.random() * 4000;

    star.className  = `star`;
    star.style.left = x + `%`;
    star.style.top  = y + `%`;
    
    setTimeout(function() {
        backgroundDiv.appendChild(star);
    }, delay);

    if (i % cometToStarsRatio == 0) {
        let comet   = document.createElement(`div`);

        let x       = Math.random() * 140 + 30;
        let delay   = Math.random() * 4000;
        let speed   = Math.random() * 8 + 2;

        comet.className = `comet`;
        comet.style.left = x + `%`;
        comet.style.animationDuration = speed + `s`;

        setTimeout(function() {
            backgroundDiv.appendChild(comet);
        }, delay);
    }
};