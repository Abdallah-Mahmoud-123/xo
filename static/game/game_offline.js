let symbole = "X"
let squares = document.querySelectorAll(".squares")
let square_1 = document.getElementById("square1")
let square_2 = document.getElementById("square2")
let square_3 = document.getElementById("square3")
let square_4 = document.getElementById("square4")
let square_5 = document.getElementById("square5")
let square_6 = document.getElementById("square6")
let square_7 = document.getElementById("square7")
let square_8 = document.getElementById("square8")
let square_9 = document.getElementById("square9")

let player_score = document.getElementById("player_score")
let draw_score = document.getElementById("draw_score")
let ai_score = document.getElementById("ai_score")

let player_name1 = document.getElementById("player_name1")
let player_name2 = document.getElementById("player_name2")

let player_score_count = 0
let draw_score_count = 0
let ai_score_count = 0

let player = document.getElementById("player")
let symbol = document.getElementById("symbol")

let reset_btn = document.getElementById("reset_btn")
let kind_select = document.getElementById("kind_select")
function check_winner() {
    if (square_1.innerText === square_2.innerText && square_2.innerText === square_3.innerText && square_1.innerText !== "") {
        if (square_1.innerText === "X") {
            square_1.style.backgroundColor = "#00ff00"
            square_2.style.backgroundColor = "#00ff00"
            square_3.style.backgroundColor = "#00ff00"


        } else if (square_1.innerText === "O") {
            square_1.style.backgroundColor = "#ff0000"
            square_2.style.backgroundColor = "#ff0000"
            square_3.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_1.innerText]
    }
    else if (square_4.innerText === square_5.innerText && square_5.innerText === square_6.innerText && square_4.innerText !== "") {
        if (square_4.innerText === "X") {
            square_4.style.backgroundColor = "#00ff00"
            square_5.style.backgroundColor = "#00ff00"
            square_6.style.backgroundColor = "#00ff00"


        } else if (square_4.innerText === "O") {
            square_4.style.backgroundColor = "#ff0000"
            square_5.style.backgroundColor = "#ff0000"
            square_6.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_4.innerText]
    }
    else if (square_7.innerText === square_8.innerText && square_8.innerText === square_9.innerText && square_7.innerText !== "") {
        if (square_7.innerText === "X") {
            square_7.style.backgroundColor = "#00ff00"
            square_8.style.backgroundColor = "#00ff00"
            square_9.style.backgroundColor = "#00ff00"


        } else if (square_7.innerText === "O") {
            square_7.style.backgroundColor = "#ff0000"
            square_8.style.backgroundColor = "#ff0000"
            square_9.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_7.innerText]
    }
    else if (square_1.innerText === square_4.innerText && square_4.innerText === square_7.innerText && square_1.innerText !== "") {
        if (square_1.innerText === "X") {
            square_1.style.backgroundColor = "#00ff00"
            square_4.style.backgroundColor = "#00ff00"
            square_7.style.backgroundColor = "#00ff00"


        } else if (square_1.innerText === "O") {
            square_1.style.backgroundColor = "#ff0000"
            square_4.style.backgroundColor = "#ff0000"
            square_7.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return true
    }
    else if (square_2.innerText === square_5.innerText && square_5.innerText === square_8.innerText && square_2.innerText !== "") {
        if (square_2.innerText === "X") {
            square_2.style.backgroundColor = "#00ff00"
            square_5.style.backgroundColor = "#00ff00"
            square_8.style.backgroundColor = "#00ff00"



        } else if (square_2.innerText === "O") {
            square_2.style.backgroundColor = "#ff0000"
            square_5.style.backgroundColor = "#ff0000"
            square_8.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_2.innerText]
    }
    else if (square_3.innerText === square_6.innerText && square_6.innerText === square_9.innerText && square_3.innerText !== "") {
        if (square_3.innerText === "X") {
            square_3.style.backgroundColor = "#00ff00"
            square_6.style.backgroundColor = "#00ff00"
            square_9.style.backgroundColor = "#00ff00"


        } else if (square_3.innerText === "O") {
            square_3.style.backgroundColor = "#ff0000"
            square_6.style.backgroundColor = "#ff0000"
            square_9.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_3.innerText]
    }
    else if (square_1.innerText === square_5.innerText && square_5.innerText === square_9.innerText && square_1.innerText !== "") {
        if (square_1.innerText === "X") {
            square_1.style.backgroundColor = "#00ff00"
            square_5.style.backgroundColor = "#00ff00"
            square_9.style.backgroundColor = "#00ff00"


        } else if (square_1.innerText === "O") {
            square_1.style.backgroundColor = "#ff0000"
            square_5.style.backgroundColor = "#ff0000"
            square_9.style.backgroundColor = "#ff0000"


        }

        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_1.innerText]
    }
    else if (square_3.innerText === square_5.innerText && square_5.innerText === square_7.innerText && square_3.innerText !== "") {
        if (square_3.innerText === "X") {
            square_3.style.backgroundColor = "#00ff00"
            square_5.style.backgroundColor = "#00ff00"
            square_7.style.backgroundColor = "#00ff00"


        } else if (square_3.innerText === "O") {
            square_3.style.backgroundColor = "#ff0000"
            square_5.style.backgroundColor = "#ff0000"
            square_7.style.backgroundColor = "#ff0000"


        }
        squares.forEach(square => {
            square.style.pointerEvents = "none"
        })
        return [true, square_3.innerText]
    }
    else {
        return [false, ""]
    }
}

function squares_func(square) {
    count_score()
    if (square.innerText === "" && symbole === "X") {
        square.innerText = symbole
        player.innerText = "AI"
        symbole = "O"
        symbol.innerText = "O"
    } else if (square.innerText === "" && symbole === "O") {
        square.innerText = symbole
        player.innerText = "YOU"
        symbole = "X"
        symbol.innerText = "X"
    }
    count_score()
    kind_select_func()
}

function count_score() {
    let [winner, winner_symbol] = check_winner()
    if (winner) {
        setTimeout(() => {
            squares.forEach(square => {
                square.style.backgroundColor = "#c7c7c7"
                square.innerText = ""
                square.style.pointerEvents = "auto"
                symbole = "X"
                symbol.innerText = "X"
                player.innerText = "YOU"
            })
        }, 2000)
        if (winner_symbol === "X") {
            player_score_count += 1
            player_score.innerText = player_score_count
            player.innerText = "YOU"
        } else if (winner_symbol === "O") {
            ai_score_count += 1
            ai_score.innerText = ai_score_count
            player.innerText = "YOU"
        }
    } else if (square_1.innerText !== "" && square_2.innerText !== "" && square_3.innerText !== "" && square_4.innerText !== "" && square_5.innerText !== "" && square_6.innerText !== "" && square_7.innerText !== "" && square_8.innerText !== "" && square_9.innerText !== "") {
        squares.forEach(square => {
            square.style.backgroundColor = "yellow"
        })
        setTimeout(() => {
            squares.forEach(square => {
                square.style.backgroundColor = "#c7c7c7"
                square.innerText = ""
                square.style.pointerEvents = "auto"
                player.innerText = "YOU"
                symbole = "X"
                symbol.innerText = "X"


            })
        }, 2000)
        draw_score_count += 1
        draw_score.innerText = draw_score_count
        symbole = "X"
        symbol.innerText = "X"

    }
}

function reset_score() {
    player_score_count = 0
    draw_score_count = 0
    ai_score_count = 0
    player_score.innerText = player_score_count
    draw_score.innerText = draw_score_count
    ai_score.innerText = ai_score_count
}

kind_select.addEventListener("change", () => {
    reset_score()
    squares.forEach(square => {
        square.style.backgroundColor = "#c7c7c7"
        square.innerText = ""
        square.style.pointerEvents = "auto"
        symbole = "X"
        symbol.innerText = "X"
    })
    kind_select_func()
})

function kind_select_func() {
    if (kind_select.value === "friend") {
        player_name1.innerText = "YOU"
        player_name2.innerText = "FRIEND"
    }
    else if (kind_select.value === "ai") {
        player_name1.innerText = "YOU"
        player_name2.innerText = "AI"
        ai_move()
    }
}
function ai_move() {
    let empty_squares = []
    squares.forEach(square => {
        if (square.innerText === "") {
            empty_squares.push(square)
        }
    })
    if (empty_squares.length > 8) {
        return
    } else {
        let [winner, winner_symbol] = check_winner()
        if (winner) {
            return
        }
        let random_square = empty_squares[Math.floor(Math.random() * empty_squares.length)]
        setTimeout(() => {
            squares.forEach(square => {
                square.style.pointerEvents = "none"
            })
            symbole = "O"
            random_square.innerText = "O"
            console.log(empty_squares.length)
            check_winner()
            count_score()
            player.innerText = "YOU"
            symbole = "X"
            symbol.innerText = "X"
        }, 500)
    }

}