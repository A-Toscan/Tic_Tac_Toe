const htmlBoxes = document.querySelectorAll(".boxes");
const mapBoxes = [];

let turno1 = false;

const manageClick = (element) => {
    console.log(element.innerHTML);

    if ((element.innerHTML = " ")) {
        if (turno1) {
            element.innerHTML = "🥝";
        }else {
            element.innerHTML = "🍓";
        }
        turno1 = !turno1
        
    }

    manageGameBoard(htmlBoxes);
};

const manageGameBoard = (uiBoxes) => {
    for (const b of uiBoxes) {
        console.log(b.innerHTML);
    }
};

for (let b of htmlBoxes) {
    b.addEventListener("click", (event) => {
        const element = event.target;
        manageClick(element);
    });
}
