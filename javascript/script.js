var playerChoice = 0;
var playerPoints = 0;
var computerChoice = 0;
var computerPoints = 0;
var winner = "";
var gameType = -1;
var id = -1;


function tipoJogo(choice)
{
    /*choice:
        1 - Melhor de 3
        2 - Melhor de 5
        3 - Melhor de 7
    */
   localStorage.setItem("gameType", choice);
   var id = parseInt(localStorage.getItem("id"));

   console.log(id);
   if(id == null || isNaN(id))
   {
        localStorage.setItem("id", "1");
   }
   
}

function play(choice)
{
    playerChoice = choice;
    
    computerChoice = Math.floor((Math.random() *(3 - 1 + 1)) + 1);

    /*Fazer o botão de desistir aparecer*/
    document.getElementById("desistir").style.display = "block";
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

    removeSelected();

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

    /*IMPLEMENTA AS REGRAS*/
    gameType = localStorage.getItem("gameType");    
    
    if(gameType === "1") //Melhor de 3
    {        
        if(playerPoints === 2 || computerPoints === 2)
        {            
            if(playerPoints === 2)
            {               
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';
                id = parseInt(localStorage.getItem("id"));

                console.log(id);

                /*Atualize o histórico*/
                updateHistoric(id, "você", playerPoints, computerPoints, "não");                
                
            }
            else
            {                
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';

                id = parseInt(localStorage.getItem("id"));

                console.log(id);

                /*Atualize o histórico*/
                updateHistoric(id, "computador", playerPoints, computerPoints, "não");
            }
            /* desabilitar os botões */
            disableButtons();

            /*Fazer o botão de jogar novamente aparecer*/
            blockPlayAgain();

            /*Fazer o botão desistir desaparecer*/
            giveUpDisappear();
        }
    }

    else if(gameType === "2") //Melhor de 5
    {
        if(playerPoints === 3 || computerPoints === 3)
        {            
            if(playerPoints === 3)
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';

                id = parseInt(localStorage.getItem("id"));

                /*Atualize o histórico*/
                updateHistoric(id, "você", playerPoints, computerPoints, "não");                                 
            }
            else
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';

                id = parseInt(localStorage.getItem("id"));

                /*Atualize o histórico*/
                updateHistoric(id, "computador", playerPoints, computerPoints, "não"); 
            }
            /* desabilitar os botões */
            disableButtons();

            /*Fazer o botão de jogar novamente aparecer*/
            blockPlayAgain();

            /*Fazer o botão desistir desaparecer*/
            giveUpDisappear();
        }
    }

    else if(gameType === "3") //Melhor de 7
    {
        if(playerPoints === 4 || computerPoints === 4)
        {            
            if(playerPoints === 4)
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Você ganhou!';

                id = parseInt(localStorage.getItem("id"));

                /*Atualize o histórico*/
                updateHistoric(id, "você", playerPoints, computerPoints, "não"); 
            }
            else
            {
                document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';

                id = parseInt(localStorage.getItem("id"));

                /*Atualize o histórico*/
                updateHistoric(id, "computador", playerPoints, computerPoints, "não"); 
            }
            /* desabilitar os botões */
            disableButtons();

            /*Fazer o botão de jogar novamente aparecer*/
            blockPlayAgain();

            /*Fazer o botão desistir desaparecer*/
            giveUpDisappear();
        }
    }
}

function updateHistoric(id, winner, playerPoints, computerPoints, desistencia)
{
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear();

    var getHistoric = JSON.parse(localStorage.getItem('historico'));
    var obj;

    if(getHistoric == null)
    {
        obj = [];        
    }
    
    else
    {
        obj = getHistoric;
    }
                    
    var aux = [id, datetime, winner, playerPoints + "x" +computerPoints, desistencia];                
    var newArray = obj.slice();
    newArray.push(aux);
    localStorage.setItem('historico', JSON.stringify(newArray));

    id++;
    localStorage.setItem("id", id);
}


function giveUp()
{
    document.getElementById('messages').innerHTML = 'Partida Encerrada! Computador ganhou!';

    id = parseInt(localStorage.getItem("id"));

    /*Atualize o histórico*/
    updateHistoric(id, "computador", playerPoints, computerPoints, "sim"); 
    
    /* desabilitar os botões */
    disableButtons();

    /*Fazer o botão de jogar novamente aparecer*/
    blockPlayAgain();

    /*Fazer o botão desistir desaparecer*/
    giveUpDisappear();
}

function disableButtons()
{    
    document.getElementById("player-choice-1").classList.add('disabled');
    document.getElementById("player-choice-2").classList.add('disabled');
    document.getElementById("player-choice-3").classList.add('disabled');

    document.getElementById("computer-choice-1").classList.add('disabled');
    document.getElementById("computer-choice-2").classList.add('disabled');
    document.getElementById("computer-choice-3").classList.add('disabled');
}

function blockPlayAgain()
{
    document.getElementById("jogar-novamente").style.display = "block";
}

function giveUpDisappear()
{
    document.getElementById("desistir").style.display = "none";
}

function removeSelected()
{
    document.getElementById("player-choice-1").classList.remove('selected');
    document.getElementById("player-choice-2").classList.remove('selected');
    document.getElementById("player-choice-3").classList.remove('selected');

    document.getElementById("computer-choice-1").classList.remove('selected');
    document.getElementById("computer-choice-2").classList.remove('selected');
    document.getElementById("computer-choice-3").classList.remove('selected');
}