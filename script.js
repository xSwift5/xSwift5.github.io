var player1 = "Player1";
var player2 = "Player2";

function editNames() {
    player1 = prompt("Change Player1 name:");
    player2 = prompt("Change Player2 name:");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice() {

    const dice1 = document.querySelector(".img1");
    const dice2 = document.querySelector(".img2");

    let counter = 0;
    const animationInterval = setInterval(() => {
        counter++;

        let randomFace1 = Math.floor(Math.random() * 6) + 1;
        let randomFace2 = Math.floor(Math.random() * 6) + 1;

        dice1.setAttribute("src", "Images/dice" + randomFace1 + ".png");
        dice2.setAttribute("src", "Images/dice" + randomFace2 + ".png");

        if (counter > 25) {
            clearInterval(animationInterval);

           
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            document.querySelector(".img1").setAttribute("src", "Images/dice" + randomNumber1 + ".png");
            document.querySelector(".img2").setAttribute("src", "Images/dice" + randomNumber2 + ".png");

            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "It's a Draw!"; 
            }
            
            else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML = (player2 + " Wins!")
            }

            else {
                document.querySelector("h1").innerHTML = (player1 + " Wins!");
            }
        
        }
    }, 150); 
}