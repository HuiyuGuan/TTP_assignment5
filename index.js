// javascript
const addRowBtn = document.getElementById("add-row")
const removeRowBtn = document.getElementById("remove-row")
const addColBtn = document.getElementById("add-col")
const removeColBtn = document.getElementById("remove-col")
const fillUncoloredBtn = document.getElementById("fill-uncolored")
const fillAllBtn = document.getElementById("fill-all")
const clearAllBtn = document.getElementById("clear-all")
const grid = document.getElementById("grid")
const select = document.getElementById("color")


addRowBtn.addEventListener("click",addRow)
function addRow(){
    let hasRow = document.querySelector(".row")
    if(hasRow){
        grid.appendChild(hasRow.cloneNode(true))
    }
    else{
        let row = document.createElement("div")
        row.className = "row"
        grid.appendChild(row)
        createBlock(row)
    }
}
removeRowBtn.addEventListener("click",removeRow)
function removeRow(){
    let row = document.querySelector(".row:last-child")
    row.remove()
}
addColBtn.addEventListener("click",addCol)
function addCol(){
    let rows = document.querySelectorAll(".row")
    rows.forEach(function(row){
        createBlock(row)
    })
}
removeColBtn.addEventListener("click",removeCol)
function removeCol(){
    let rows = document.querySelectorAll(".row")
    rows.forEach((row)=>row.removeChild(row.lastChild))
}
fillUncoloredBtn.addEventListener("click",fillUncolored)
function fillUncolored(){
    let blocks = document.querySelectorAll(".block")
    let color = select.options[select.selectedIndex].value
    blocks.forEach((block)=>{
        if(block.style.backgroundColor == "white"){
            block.style.backgroundColor = `${color}`
       }
    })
}
fillAllBtn.addEventListener("click",fillAll)
function fillAll(){
    let blocks = document.querySelectorAll(".block")
    let color = select.options[select.selectedIndex].value
    blocks.forEach((block)=>block.style.backgroundColor=`${color}`)
}
clearAllBtn.addEventListener("click",clearAll)
function clearAll(){
    let blocks = document.querySelectorAll(".block")
    let color = select.options[select.selectedIndex].value
    blocks.forEach((block)=>block.style.backgroundColor="white")
}
function createBlock(node){
    let block = document.createElement("div")
    block.className = "block"
    block.style.backgroundColor = "white"
    node.appendChild(block)
}
let count = -1
function setColor(){
    let block = document.querySelector(".block:hover")
    let color = select.options[select.selectedIndex].value
    if(block)
        block.style.backgroundColor = `${color}`
}
document.addEventListener('mousedown', () => {
    if (count === -1) {
        count = setInterval(setColor, 5);
    }
});

document.addEventListener("mouseup", () => {
    if(count !== -1) {
        clearInterval(count);
        count = -1;
    }
});