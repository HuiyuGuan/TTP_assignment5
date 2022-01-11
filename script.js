let board = document.getElementById("board");

// Rows

function addRow(){
    // Create a new Div and make it look like a box
    let newRow = document.createElement("div");
    newRow.classList.add("row");

    // Base Case -- Nothing there
    if(board.children.length === 0){
        // Add new Row

        return;
    }else{
        board.appendChild(newRow);
    }
}

function removeRow(){
// Stops error in console
if(document.querySelectorAll(".row").length < 1){return}
// Get all rows
let rows = document.querySelectorAll(".row");
// Remove the last element in the rows
board.removeChild(rows[rows.length-1]);
}

// Columns

function addColumn(){

    // Base Case -- Nothing there
    if(rows.length === 0){
        addRow();
    }
}

function removeColumn(){

}
