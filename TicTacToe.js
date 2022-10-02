window.onload = () => {

    const turn = (id) => {

        cells[id].classList.add("human");
    }

        cells.forEach(c => c.addEventListener("click", play, false));
}