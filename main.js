const cells = document.querySelectorAll(".cell");
let xTurn=true;
let oTurn=false;
let isEndOfTheGame = false;
const singlePlayer = document.querySelector("#AI");
let gameBoard = (function(){
    const cross= `<img src="Cross.svg">`;
    const circle= `<img src="Circle.svg">`;
    let array = ["","","","","","","","",""];
    return {
        displayBoard : function(){
            cells.forEach((cell,index)=>{
               if(array[index]==="X"){
                   cell.innerHTML=cross;
               }
               else if(array[index]==="O"){
                cell.innerHTML=circle;
               }
               else cell.innerHTML="";
            })

        },
        checkBoard : function(){
            if ((array[0]==="X") && (array[0]===array[1] && array[1]===array[2])){
                for(i=0;i<=2;i++){
                 cells[i].style.backgroundColor="red";}
                 return 1;} 
            else if((array[3]==="X") && (array[3]===array[4] && array[4]===array[5])){
                for(i=3;i<=5;i++){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if((array[6]==="X") && (array[6]===array[7] && array[7]===array[8])){
                for(i=6;i<=8;i++){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if((array[0]==="X") && (array[0]===array[3] && array[3]===array[6])){
                for(i=0;i<=6;i+=3){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if((array[1]==="X") && (array[1]===array[4] && array[4]===array[7])){
                for(i=1;i<=7;i+=3){
                 cells[i].style.backgroundColor="red";} return 1;} 
            else if((array[2]==="X") && (array[2]===array[5] && array[5]===array[8])){
                for(i=2;i<=8;i+=3){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if((array[0]==="X") && (array[0]===array[4] && array[4]===array[8])){
                for(i=0;i<=8;i+=4){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if((array[2]==="X") && (array[2]===array[4] && array[4]===array[6])) {
                for(i=2;i<=6;i+=2){
                 cells[i].style.backgroundColor="red";} return 1;}
            else if ((array[0]==="O") && (array[0]===array[1] && array[1]===array[2])){
                for(i=0;i<=2;i++){
                 cells[i].style.backgroundColor="red";} return 2; }
            else if((array[3]==="O") && (array[3]===array[4] && array[4]===array[5])){
                for(i=3;i<=5;i++){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[6]==="O") && (array[6]===array[7] && array[7]===array[8])){
                for(i=6;i<=8;i++){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[0]==="O") && (array[0]===array[3] && array[3]===array[6])){
                for(i=0;i<=6;i+=3){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[1]==="O") && (array[1]===array[4] && array[4]===array[7])){
                for(i=1;i<=7;i+=3){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[2]==="O") && (array[2]===array[5] && array[5]===array[8])){
                for(i=2;i<=8;i+=3){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[0]==="O") && (array[0]===array[4] && array[4]===array[8])){
                for(i=0;i<=8;i+=4){
                 cells[i].style.backgroundColor="red";} return 2;}
            else if((array[2]==="O") && (array[2]===array[4] && array[4]===array[6])) {
                for(i=2;i<=6;i+=2){
                 cells[i].style.backgroundColor="red";} return 2;}
            else return "Draw";
        },
        placeMarker : function(marker,index){
            array[index]=marker;
        },
        showArray   : function(){
            console.log(array);
            return array;
            
        },
        clearArray  : function(){
            array = ["","","","","","","","",""];
            for(i=0;i<=8;i++){
                cells[i].style.backgroundColor="#0E0E0E";
            }
        },
    }
})();

const Player = (name,score) =>{
    const getName = () => console.log(name);
    const getScore = () => score;
    const incScore = () => ++score;
    const resetScore = () => score=0;
    return {getName,getScore,incScore,resetScore};
};

const Player1 = Player("Player1",0);
const Player2 = Player("Player2",0);
const AI = Player("AI",0);

const gameFlow = (function (){
        let random;
        let randomCell = function(){
            while(gameBoard.showArray()[random]!=="" && gameBoard.showArray().includes("")){
            random = Math.floor(Math.random()*9);}
            return random;
        }
        const computer = document.querySelector("#computer");
        const firstScore= document.querySelector("#firstScore");
        const secondScore=document.querySelector("#secondScore");
        const resetScore=document.querySelector("#resetScore");
        resetScore.addEventListener('click',()=>{
            resetScore.classList.add("pushed");
            Player1.resetScore();
            Player2.resetScore();
            firstScore.textContent=0;
            secondScore.textContent=0;
            setTimeout(()=>resetScore.classList.remove("pushed"),300)
        })
        let newGame = function(){
            gameBoard.clearArray();
            gameBoard.displayBoard();
            singlePlayer.style.pointerEvents="all";
            isEndOfTheGame=false;
            cells.forEach(cell=>cell.style.pointerEvents="all");
        }
        let declareWinner = function(player){
            if (player === 1) {
                Player1.incScore();
                firstScore.textContent=Player1.getScore();
                cells.forEach(cell=>cell.style.pointerEvents="none");
            }
            else if (player === 2){
                Player2.incScore();
                secondScore.textContent=Player2.getScore();
                cells.forEach(cell=>cell.style.pointerEvents="none");
            }
            else {
                console.log("It's a draw!");
            }
            isEndOfTheGame = true;
        }
    return{
        startGame : function(){
            singlePlayer.addEventListener('click',()=>{
                if(singlePlayer.classList.contains("active")){
                    singlePlayer.classList.remove("active");
                    computer.textContent="Player 2";
                }
                else {
                    singlePlayer.classList.add("active");
                    computer.textContent="Computer";
                    }     

            })
            let toggle = true;
            const restartButton = document.querySelector("#resetButton");
            restartButton.addEventListener('click',()=>{
                newGame();
                toggle=true;
                restartButton.classList.add("pushed");
                setTimeout(()=>restartButton.classList.remove("pushed"),500);
            })

            gameBoard.displayBoard();
            cells.forEach((cell,index)=>{
                cell.addEventListener('click', ()=>{
                     if(toggle===true && gameBoard.showArray()[index]===""){
                         singlePlayer.style.pointerEvents="none";
                         gameBoard.placeMarker("X",index);
                         toggle=!toggle;  
                         xTurn=false;
                         oTurn=true;
                         gameBoard.displayBoard(); 
                         if(toggle===false && singlePlayer.classList.contains("active")
                                           && gameBoard.checkBoard()=="Draw")
                         {
                          gameBoard.placeMarker("O",randomCell());
                          setTimeout(function(){gameBoard.displayBoard()},300);
                          gameBoard.showArray();
                          toggle=!toggle;   
                          xTurn=true;
                          oTurn=false;
                        }
                    }
                     else if(toggle===false && gameBoard.showArray()[index]===""){
                         gameBoard.placeMarker("O",index);
                         toggle=!toggle;  
                         xTurn=true;
                         oTurn=false;
                         gameBoard.displayBoard();
                     }
                    
                     
                     if (gameBoard.checkBoard() === 1 ){
                        console.log("Hi");
                       declareWinner(1);
                   }
                   else if (gameBoard.checkBoard() === 2 ){
                       console.log("Hi");
                      declareWinner(2);
                   }
                   else if(!gameBoard.showArray().includes("")) {
                       declareWinner("Draw");
                   }
                     
                     
                 })
            })
        },
        
    }
        })();

    gameFlow.startGame();



