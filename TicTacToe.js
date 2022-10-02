window.onload = () => {

    const cells = document.querySelectorAll(".cell");

    let player = 1; // 1 => human and 0 => computer

    let game_state = [2, 2, 2, 2, 2, 2, 2, 2, 2];

    let count = 0;

    const play = (e) => {

        if (count < 9) {

            game_state[e.target.id] = player;

            turn(e.target.id);

            for (let index = 0; index < game_state.length && player == 0; index++) {
                if (game_state[index] == 2) {
                    game_state[index] = player;
                    turn(index);

                }
            }
        }
    }

    const turn = (id) => {

        if (player) {
            cells[id].classList.add("human");
            player = 0;
            count++;
        }
        else {
            cells[id].classList.add("computer");
            player = 1;
            count++;
        }
    }

    cells.forEach(c => c.addEventListener("click", play, false));
}