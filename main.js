const cells = document.querySelectorAll(".cell");
const cross= `<img src="Cross.svg"`;
const circle= `<img src="Circle.svg`;
console.log(cells);
let gameboard = (function(){
    let array = ["X","O","X","X","O","X","O","O","X"];
    return {
        displayBoard : function(){
            cells.forEach((cell,index)=>{
                cell.innerHTML=`<img src="${array[index]==="X"? "Cross" : "Circle"}.svg">`;
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

