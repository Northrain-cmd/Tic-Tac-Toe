let gameboard = (function(){
    const cells = document.querySelectorAll(".cell");
    const cross= `<img src="Cross.svg">`;
    const circle= `<img src="Circle.svg">`;
    let array = ["X","O","X","X","O","X","O","O","X"];
    return {
        displayBoard : function(){
            cells.forEach((cell,index)=>{
               if(array[index]==="X"){
                   cell.innerHTML=cross;
               }
               else{
                cell.innerHTML=circle;
               }
            })

        },
    }
})();
gameboard.displayBoard();
let player1 = {

}
let player2 = {

}
let gameflow = {

}

