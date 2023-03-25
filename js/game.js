let turno1 = false;

const manageClick = (element) => {
  console.log(element.innerHTML);

  const htmlBoxes = document.querySelectorAll("boxes");
  const mapBoxes = [];

  if ((element.innerHTML = " ")) {
    if (turno1) {
      element.innerHTML = '<img src="img/O.png">';
    } else {
      element.innerHTML = '<img src="img/X.png">';
    }
    turno1 = !turno1;
  }

  manageGameBoard(htmlBoxes);
};

//   for (let b of htmlBoxes) {
//     b.addEventListener("click", (event) => {
//       const element = event.target;
//       manageClick(element);
//     });
//   }

//   const markBoxes = () => {}

const register = () => {
  console.log("adding addEventListener");
  const htmlBoxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < htmlBoxes.length; i++) {
    htmlBoxes[i].addEventListener("click", (event) => {
      const element = event.target;
      manageClick(element);
    });
  }
};

const manageGameBoard = (uiBoxes) => {
  for (const b of uiBoxes) {
    console.log(b.innerHTML);
  }
};
