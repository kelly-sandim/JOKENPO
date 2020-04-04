var playerChoice = 0;
var playerPoints = 0;
var computerChoice = 0;
var computerPoints = 0;
var winner = "";
var gameType = -1;

function tipoJogo(choice)
{
    /*choice:
        1 - Melhor de 3
        2 - Melhor de 5
        3 - Melhor de 7
    */
   localStorage.setItem("gameType", choice);
}

function play(choice)
{
    playerChoice = choice;
    
    computerChoice = Math.floor((Math.random() *(3 - 1 + 1)) + 1);

    /*
    1 - Pedra
    2 - Papel
    3 - Tesoura
     */

     //CASOS PEDRA
    if((playerChoice == 1) && (computerChoice == 1))
    {
        winner = "empate";
    } 

    else if((playerChoice == 1) && (computerChoice == 2))
    {
        winner = "computador";
        computerPoints++;
    } 

    else if ((playerChoice == 1) && (computerChoice == 3))
    {
        winner = "jogador";
        playerPoints++;
    } 
    
    //CASOS PAPEL
    else if((playerChoice == 2) && (computerChoice == 1))
    {
        winner = "jogador";
        playerPoints++;
    } 

    else if((playerChoice == 2) && (computerChoice == 2))
    {
        winner = "empate";
    } 

    else if ((playerChoice == 2) && (computerChoice == 3))
    {
        winner = "computador";
        computerPoints++;
    }

    //CASOS TESOURA
    else if((playerChoice == 3) && (computerChoice == 1))
    {
        winner = "computador";
        computerPoints++;
    } 

    else if((playerChoice == 3) && (computerChoice == 2))
    {
        winner = "jogador";
        playerPoints++;
    } 

    else if ((playerChoice == 3) && (computerChoice == 3))
    {
        winner = "empate";
    }

    document.getElementById("player-choice-1").classList.remove('selected');
    document.getElementById("player-choice-2").classList.remove('selected');
    document.getElementById("player-choice-3").classList.remove('selected');

    document.getElementById("computer-choice-1").classList.remove('selected');
    document.getElementById("computer-choice-2").classList.remove('selected');
    document.getElementById("computer-choice-3").classList.remove('selected');

    document.getElementById("player-choice-" + playerChoice).classList.add('selected');
    document.getElementById("computer-choice-" + computerChoice).classList.add('selected');

    if(winner === "empate")
    {
        document.getElementById('messages').innerHTML = 'Empate!';
    }

    else if(winner === "jogador")
    {
        document.getElementById('messages').innerHTML = 'Jogador ganhou!';
    }

    else if(winner === "computador")
    {
        document.getElementById('messages').innerHTML = 'Computador ganhou!';
    }

    document.getElementById('player-points').innerHTML = playerPoints;
    document.getElementById('computer-points').innerHTML = computerPoints;

    gameType = localStorage.getItem("gameType");
    
    if(gameType === "1")
    {        
        if(playerPoints === 2 || computerPoints === 2)
        {            
            if(playerPoints === 2)
            {               
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';
            }
            else
            {                
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';
            }
        }
    }

    else if(gameType === "2")
    {
        if(playerPoints === 3 || computerPoints === 3)
        {            
            if(playerPoints === 3)
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';
            }
            else
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';
            }
        }
    }

    else if(gameType === "3")
    {
        if(playerPoints === 4 || computerPoints === 4)
        {            
            if(playerPoints === 4)
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';
            }
            else
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';
            }
        }
    }
}