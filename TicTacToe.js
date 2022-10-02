window.onload = () => {

    const cells = document.querySelectorAll(".cell");

    let player = 1; // 1 => human and 0 => computer

    let game_state = [2, 2, 2, 2, 2, 2, 2, 2, 2];

    const play = (e) => {

        game_state[e.target.id] = player;

        turn(e.target.id);

        for (let index = 0; index < game_state.length && player == 0; index++) {
            if (game_state[index] == 2) {
                game_state[index] = player;
                turn(index);

            }
        }

    }

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