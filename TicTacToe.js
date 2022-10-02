window.onload = () => {

    const cells = document.querySelectorAll(".cell");

    const status = document.getElementById("winner");

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    let game_state = [2, 2, 2, 2, 2, 2, 2, 2, 2];

    let player = 1; // 1 => human and 0 => computer

    let count = 0;

    const winning = (e) => {

        for (let value = 0; value < winCombos.length; value++) {

            if (game_state[winCombos[value][0]] == game_state[winCombos[value][1]] && game_state[winCombos[value][1]] == game_state[winCombos[value][2]] && game_state[winCombos[value][0]] != 2) {

                count = 9;

                if (game_state[winCombos[value][0]] == 1) {
                    status.innerText = "The winner is: human";
                    return false;
                } else {
                    status.innerText = "The winner is: computer";
                    return false;
                }
            }
        }
        return true;
    }

    const play = (e) => {

        if (count < 9 && winning()) {

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
        winning();
    }

    cells.forEach(c => c.addEventListener("click", play, false));
}
