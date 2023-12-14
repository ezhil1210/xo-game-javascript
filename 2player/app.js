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
    btns = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    let winner = "none"


    function main() {
        btn.addEventListener('click', function () {
            clicked = 0
            active = 1
            moves = 0

            result.innerText = "Click to play";
            btns.forEach(element => {
                element.innerText = "";
                element.classList.remove('green-glow')
                element.classList.remove('red-glow')
                element.classList.remove('x')
                element.classList.remove('o')
                btn.innerHTML = "Reset Game"
                winner="none"
            });
        })

        btns.forEach(b => {
            clicked = 0
            active = 1
            moves = 0
            b.addEventListener('mouseenter', function (){
                if(b.innerText=="" && clicked==0){
                    b.innerText='x'
                    b.classList.add('xhover');
                }
                if(b.innerText=="" && clicked==1){
                    b.innerText='o'
                    b.classList.add('ohover');
                }
            })
            b.addEventListener('mouseleave', function (){
                if(b.innerText=="x"){
                    b.innerText=""
                    b.classList.remove('xhover');
                }
                if(b.innerText=="o"){
                    b.innerText=""
                    b.classList.remove('ohover');
                }
            })
            b.addEventListener('click', function () {
                if (clicked == 0 && b.innerText == "x" && active == 1) {
                    b.classList.add('grey-glow');
                    b.classList.add('x');
                    setTimeout(() => b.classList.remove('grey-glow'), 100);
                    b.classList.remove('xhover');
                    b.innerText = "X";
                    clicked = 1
                    checkifwon();
                }
                else if (clicked == 1 && b.innerText == "o" && active == 1) {
                    b.classList.add('grey-glow');
                    b.classList.remove('ohover');
                    b.classList.add('o');
                    b.innerText = "O";
                    setTimeout(() => b.classList.remove('grey-glow'), 100);
                    clicked = 0
                    checkifwon();
                }
                moves += 1

            })
            
        });




    }

main();    

    function checkifwon() {
        console.log(moves)
        if (moves == 8 && active == 1) {
            result.innerText = "Its a draw"
            active = 0
        }
        else if (clicked == 0) {
            result.innerText = "Turn for : X"
        }
        else if (clicked == 1 && active == 1 && moves < 8) {
            result.innerText = "Turn for : O"
        }
        if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b2.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b3.classList.add('green-glow');
            b2.classList.add('green-glow');


        }
        else if (b4.innerText == b5.innerText && b4.innerText == b6.innerText && b4.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b4.classList.add('green-glow');
            b5.classList.add('green-glow');
            b6.classList.add('green-glow');
        }
        else if (b7.innerText == b9.innerText && b7.innerText == b8.innerText && b7.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b7.classList.add('green-glow');
            b8.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b1.innerText == b4.innerText && b1.innerText == b7.innerText && b1.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b4.classList.add('green-glow');
            b7.classList.add('green-glow');
        }
        else if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b2.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b2.classList.add('green-glow');
            b5.classList.add('green-glow');
            b8.classList.add('green-glow');
        }
        else if (b3.innerText == b6.innerText && b3.innerText == b9.innerText && b3.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b3.classList.add('green-glow');
            b6.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b1.innerText == b5.innerText && b1.innerText == b9.innerText && b1.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b1.classList.add('green-glow');
            b5.classList.add('green-glow');
            b9.classList.add('green-glow');
        }
        else if (b3.innerText == b5.innerText && b3.innerText == b7.innerText && b3.innerText == "X") {
            result.innerText = "X won"
            winner = "x"
            active = 0
            b3.classList.add('green-glow');
            b5.classList.add('green-glow');
            b7.classList.add('green-glow');
        }
        else if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b2.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b1.classList.add('red-glow');
            b3.classList.add('red-glow');
            b2.classList.add('red-glow');
        }
        else if (b4.innerText == b5.innerText && b4.innerText == b6.innerText && b4.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b5.classList.add('red-glow');
            b4.classList.add('red-glow');
            b6.classList.add('red-glow');
        }
        else if (b7.innerText == b9.innerText && b7.innerText == b8.innerText && b7.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b7.classList.add('red-glow');
            b8.classList.add('red-glow');
            b9.classList.add('red-glow');
        }
        else if (b1.innerText == b4.innerText && b1.innerText == b7.innerText && b1.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b1.classList.add('red-glow');
            b4.classList.add('red-glow');
            b7.classList.add('red-glow');
        }
        else if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b2.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b2.classList.add('red-glow');
            b5.classList.add('red-glow');
            b8.classList.add('red-glow');
        }
        else if (b3.innerText == b6.innerText && b3.innerText == b9.innerText && b3.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b3.classList.add('red-glow');
            b6.classList.add('red-glow');
            b9.classList.add('red-glow');
        }
        else if (b1.innerText == b5.innerText && b1.innerText == b9.innerText && b1.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b1.classList.add('red-glow');
            b5.classList.add('red-glow');
            b9.classList.add('red-glow');
        }
        else if (b3.innerText == b5.innerText && b3.innerText == b7.innerText && b3.innerText == "O") {
            result.innerText = "O won"
            winner = "o"
            active = 0
            b3.classList.add('red-glow');
            b5.classList.add('red-glow');
            b7.classList.add('red-glow');

        }

        if (active == 0) {
            btn.innerHTML = "Play Again"
        }
        if (winner=="x"){
            p1score++
        }
        if (winner=="o"){
            p2score++
        }

        p1.innerText = p1score
        p2.innerText = p2score

    }



}

maingame();