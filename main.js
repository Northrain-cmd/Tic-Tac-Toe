const cells = document.querySelectorAll(".cell");
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
            //console.log(array);
            return array;
            
        },
        clearArray  : function(){
            array = ["","","","","","","","",""];
        },
    }
})();

const Player = (name,score) =>{
    const getName = () => console.log(name);
    const getScore = () => score;
    const incScore = () => ++score;
    return {getName,getScore,incScore};
};

const Player1 = Player("Player1",0);
const Player2 = Player("Player2",0);


const gameFlow = (function (){
        const firstScore= document.querySelector("#firstScore");
        const secondScore=document.querySelector("#secondScore");
        let newGame = function(){
            gameBoard.clearArray();
            gameBoard.displayBoard();
        }
        let declareWinner = function(player){
            if (player === 1) {
                Player1.incScore();
                firstScore.textContent=Player1.getScore();
            }
            else if (player === 2){
                Player2.incScore();
                secondScore.textContent=Player2.getScore();
            }
            else {
                console.log("It's a draw!");
            }
        }
    return{
        startGame : function(){
            const restartButton = document.querySelector("#resetButton");
            restartButton.addEventListener('click',()=>{
                newGame();
            })
            let toggle = true;
            gameBoard.displayBoard();
            cells.forEach((cell,index)=>{
                cell.addEventListener('click',()=>{
                     if(toggle===true && gameBoard.showArray()[index]===""){
                         gameBoard.placeMarker("X",index);
                         toggle=!toggle;   
                    }
                     else if(toggle===false && gameBoard.showArray()[index]===""){
                         gameBoard.placeMarker("O",index);
                         toggle=!toggle;  
                     }
                     gameBoard.displayBoard();
                     if (gameBoard.checkBoard() === 1 ){
                        console.log("Hi");
                       declareWinner(1);
                   }
                   else if (gameBoard.checkBoard() === 2 ){
                       console.log("Hi");
                      declareWinner(2);
                   }
                   else {
                       declareWinner("Draw");
                   }
                     
                     
                 })
            })
        },
        
    }
        })();

gameFlow.startGame();


