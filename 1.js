var element = document.getElementById(`cour`);
var buttons = document.getElementsByClassName(`button`);

var imageWidth = 300;

function activateButton(button) {
    Array.from(buttons).forEach(temp => {
        temp.classList = "button";
    })

    button.classList.add(`active`);
}

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (event) => {
        var id = button.id.slice(7);
        element.scrollLeft = (id-1) * imageWidth;
        activateButton(button)
})})

element.addEventListener(`scroll`, (event) => {
    for (let i = 0; i < 4; i++) {
        if (i * imageWidth - imageWidth / 3 < event.target.scrollLeft) {
            if (event.target.scrollLeft < (i+1) * imageWidth - imageWidth / 3) {
                activateButton(
                    document.getElementById(`button-${i+1}`)
                )
            }
        }
    }
})