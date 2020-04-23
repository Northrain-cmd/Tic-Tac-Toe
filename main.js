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

const Player = (name) =>{
    const getName = () => console.log(name);
    return {getName};
};

const Player1 = Player("Player1");
const Player2 = Player("Player2");

Player1.getName();
Player2.getName();



const gameFlow = (function (){
    return{
        startGame : function(){
            const restartButton = document.querySelector("#resetButton");
            restartButton.addEventListener('click',()=>{
                this.newGame();
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
                 })
            })
        },
        newGame :   function(){
            gameBoard.clearArray();
            gameBoard.displayBoard();
        }
    }
        })();

gameFlow.startGame();


