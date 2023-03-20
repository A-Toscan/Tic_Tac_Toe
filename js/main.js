/* 
Starting the Java Script animation
*/

// Board Game marks

const htmlBoxes = document.querySelectorAll(".boxes");
const mapBoxes = [];

let turno1 = false;

const manageClick = (element) => {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
    if (turno1) {
      element.innerHTML = `<img src="img/O.png">`;
    } else {
      element.innerHTML = `<img src="img/X.png">`;
    }
    turno1 = !turno1;
  }

  manageTablero(htmlBoxes);
};

const manageTablero = (uiBoxes) => {
  for (const c of uiBoxes) {
    console.log(c.innerHTML);
  }
};

for (let c of htmlBoxes) {
  c.addEventListener("click", (event) => {
    const element = event.target;
    manageClick(element);
  });
}
