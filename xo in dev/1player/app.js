function maingame() {
    const b1 = document.getElementById("btn1")
    const b2 = document.getElementById("btn2")
    const b3 = document.getElementById("btn3")
    const b4 = document.getElementById("btn4")
    const b5 = document.getElementById("btn5")
    const b6 = document.getElementById("btn6")
    const b7 = document.getElementById("btn7")
    const b8 = document.getElementById("btn8")
    const b9 = document.getElementById("btn9")
    const btn = document.getElementById("btn")
    const result = document.getElementById("result")
    const p1 = document.getElementById("userscore")
    const p2 = document.getElementById("compscore")
    let clicked = 0
    let active = 1
    let moves = 0
    let p1score = 0
    let p2score = 0
    let btns = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    let winner = "none"

    function checkifwon() {
        console.log(moves)
        if (moves == 8 && active == 1) {
            result.innerText = "Its a draw"
            winner = "draw"
            active = 0
        }



        if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b2.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b3.classList.add('green-glow');
            b2.classList.add('green-glow');


        }
        else if (b4.innerText == b5.innerText && b4.innerText == b6.innerText && b4.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b4.classList.add('green-glow');
            b5.classList.add('green-glow');
            b6.classList.add('green-glow');
        }
        else if (b7.innerText == b9.innerText && b7.innerText == b8.innerText && b7.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b7.classList.add('green-glow');
            b8.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b1.innerText == b4.innerText && b1.innerText == b7.innerText && b1.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b4.classList.add('green-glow');
            b7.classList.add('green-glow');
        }
        else if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b2.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b2.classList.add('green-glow');
            b5.classList.add('green-glow');
            b8.classList.add('green-glow');
        }
        else if (b3.innerText == b6.innerText && b3.innerText == b9.innerText && b3.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b3.classList.add('green-glow');
            b6.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b1.innerText == b5.innerText && b1.innerText == b9.innerText && b1.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b5.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b3.innerText == b5.innerText && b3.innerText == b7.innerText && b3.innerText == "X") {
            result.innerText = "You won!"
            winner = "x"
            active = 0
            b3.classList.add('green-glow');
            b5.classList.add('green-glow');
            b7.classList.add('green-glow');
        }
        else if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b2.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b1.classList.add('pink-glow');
            b3.classList.add('pink-glow');
            b2.classList.add('pink-glow');
        }
        else if (b4.innerText == b5.innerText && b4.innerText == b6.innerText && b4.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b5.classList.add('pink-glow');
            b4.classList.add('pink-glow');
            b6.classList.add('pink-glow');
        }
        else if (b7.innerText == b9.innerText && b7.innerText == b8.innerText && b7.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b7.classList.add('pink-glow');
            b8.classList.add('pink-glow');
            b9.classList.add('pink-glow');
        }
        else if (b1.innerText == b4.innerText && b1.innerText == b7.innerText && b1.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b1.classList.add('pink-glow');
            b4.classList.add('pink-glow');
            b7.classList.add('pink-glow');
        }
        else if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b2.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b2.classList.add('pink-glow');
            b5.classList.add('pink-glow');
            b8.classList.add('pink-glow');
        }
        else if (b3.innerText == b6.innerText && b3.innerText == b9.innerText && b3.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b3.classList.add('pink-glow');
            b6.classList.add('pink-glow');
            b9.classList.add('pink-glow');
        }
        else if (b1.innerText == b5.innerText && b1.innerText == b9.innerText && b1.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b1.classList.add('pink-glow');
            b5.classList.add('pink-glow');
            b9.classList.add('pink-glow');
        }
        else if (b3.innerText == b5.innerText && b3.innerText == b7.innerText && b3.innerText == "O") {
            result.innerText = "Computer won!"
            winner = "o"
            active = 0
            b3.classList.add('pink-glow');
            b5.classList.add('pink-glow');
            b7.classList.add('pink-glow');

        }

        if (active == 0) {
            btn.innerHTML = "Play Again"
        }
        if (winner == "x") {
            p1score++
        }
        if (winner == "o") {
            p2score++
        }

        p1.innerText = p1score
        p2.innerText = p2score

    }




    function main() {
        btn.addEventListener('click', function () {
            clicked = 0
            active = 1
            moves = 0

            result.innerText = "Click to play";
            btns = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
            btns.forEach(element => {
                element.innerText = "";
                element.classList.remove('green-glow')
                element.classList.remove('pink-glow')
                element.classList.remove('x')
                element.classList.remove('o')
                btn.innerHTML = "Reset Game"
                winner = "none"
            });
        })

        btns.forEach(b => {
            clicked = 0
            active = 1
            moves = 0
            b.addEventListener('mouseenter', function () {
                if (b.innerText == "" && active == 1) {
                    b.innerText = 'x'
                    b.classList.add('xhover');
                }

            })
            b.addEventListener('mouseleave', function () {
                if (b.innerText == "x") {
                    b.innerText = ""
                    b.classList.remove('xhover');
                }

            })
            b.addEventListener('click', function () {
                if (b.innerText == "x" && active == 1 && winner == "none" && clicked == 0) {
                    moves += 1
                    b.classList.add('grey-glow');
                    b.classList.add('x');
                    setTimeout(() => b.classList.remove('grey-glow'), 100);
                    b.classList.remove('xhover');
                    b.innerText = "X";

                    let index = btns.indexOf(b);
                    btns.splice(index, 1)
                    console.log(btns)
                    
                    clicked = 1
                    
                    
                    
                    checkifwon();
                    console.log(winner,active)
                    if (active==1) {
                        result.innerText = "Waiting for Computer's move..."
                        setTimeout(compmove, 2000);
                        
                    }
                }






            })
            function compmove() {
                if (active == 1) {
                    result.innerText = "Play your move!"
                    let compchoice = Math.floor(Math.random() * btns.length);
                    pcmove = btns[compchoice]
                    pcmove.innerText = "O"
                    pcmove.classList.add('o');
                    pcmove.classList.add('red-glow');
                    setTimeout(() => pcmove.classList.remove('red-glow'), 400);
                    let index = btns.indexOf(pcmove);
                    btns.splice(index, 1)
                    console.log(btns)
                    checkifwon();
                    moves += 1
                    clicked = 0
                }

            }

        });




    }

    main();

}

maingame();