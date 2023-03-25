

const markBoxes = () => {
    const manageClick = (element) => {
        console.log(element.innerHTML);
    
        const htmlBoxes = document.querySelectorAll(".boxes");
        const mapBoxes = [];
    
        let turno1 = false;
    
        if ((element.innerHTML = " ")) {
            if (turno1) {
                element.innerHTML = "🥙";
            }else {
                element.innerHTML = "🍟";
            }
            turno1 = !turno1
            
        }
 
    
        manageGameBoard(htmlBoxes);
    };


    for (let i = 0; i < htmlBoxes.length; i++) {
        htmlBoxes[i].addEventListener("click", (event) => {
          const element = event.target;
          manageClick(element);
        });
    }   
    
    for (let b of htmlBoxes) {
        b.addEventListener("click", (event) => {
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


