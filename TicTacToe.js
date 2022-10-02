window.onload = () => {

    const cells = document.querySelectorAll(".cell");

    let player = 1; // 1 => human and 0 => computer
    
    const turn = (id) => {

        if (player) {
            cells[id].classList.add("human");
            player = 0;           
        }
        else {
            cells[id].classList.add("computer");
            player = 1;           
        }
    }

    cells.forEach(c => c.addEventListener("click", play, false));
}