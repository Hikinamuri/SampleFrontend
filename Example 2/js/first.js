function load() {

    let main = document.getElementById(`main`);

    mass = [
        `Let your skills work for you`,
        `Freelancing made simple and easy`,
        `Take your freelance game to next level`,
        `Work smarter, not harder with freelancing`,
        `Unlock your freelance earning potencial`,
        `Your path to successful freelancing`,
        `Elevate your freelance experience`,
        `Your freelance success start here`,
        `Join the freelance revolution`        
    ];

    for (let i = 0; i < mass.length; i++) {
        div = document.createElement(`div`);

        div.id          = `list-${i+1}`;
        div.classList   = `div before`;
        div.innerHTML   = `<h1>${mass[i]}</h1>`

        main.appendChild(div);
    };

    let i = 1;

    const timer = setInterval(function() {
        let beforeElementId = i - 1;
        let nowElementId    = i;
        let afterElementId  = i + 1;

        if (beforeElementId == 0) {
            beforeElementId = mass.length;
        }
        if (afterElementId == mass.length + 1) {
            afterElementId = 1;
        };

        let beforeElement   = document.getElementById(`list-${beforeElementId}`);
        let nowElement      = document.getElementById(`list-${nowElementId}`);
        let afterElement    = document.getElementById(`list-${afterElementId}`);

        beforeElement.classList = `div before`;
        nowElement.classList    = `div now`;
        afterElement.classList  = `div after`;

        i++;
        if (i == mass.length + 1) {
            i = 1;
        }
    }, 6000);
}

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}