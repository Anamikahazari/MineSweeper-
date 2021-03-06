const siz = 9;
var random = new Array();
var count = 0;

document.getElementById("resetButton").addEventListener("click",()=>{
    document.getElementById("grid").innerHTML = "";
    random = new Array();
    count = 0;

    createGrid();

})

function addingEvent(event){

    console.log(event.target.className);
    var squareType = event.target.className;
    document.getElementById(event.target.id).style.pointerEvents="none";
    if(squareType == "bomb"){
        // console.log("hii")
        for(var i = 0;i<random.length;i++){
            document.getElementById("cell_"+(random[i])).style.backgroundColor = "transparent";
            document.getElementById("cell_"+(random[i])).style.backgroundImage = "url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)";
            // document.getElementById("cell_{"+(random[i])+"}").style.color = "red";
        }
        document.getElementById("resultDisplay").innerText = "game over";
       
    }
    else{
        count++;
        document.getElementById(event.target.id).style.backgroundColor="orange";
        
        document.getElementById("gameScore").innerText = count;
        if(count == 71){
            document.getElementById("resultDisplay").innerText = "win";
        }
    }
}


function createGrid(){
    for (let i = 0; i < siz; i++) {
        var row = document.createElement("div");
        row.setAttribute("class","row");
        for (let j = 0; j < siz; j++) {
            var square = document.createElement('div');
            square.setAttribute("id","cell_"+(i*9+j +1));
            square.setAttribute("class","squar");
            row.appendChild(square);

            square.addEventListener("click",addingEvent);
          
        }
        document.getElementById("grid").appendChild(row);
        
    }
    bombIndex();

}

createGrid();



function bombIndex(){
    for(var i = 0;i<10 ;i++){
        var n = Math.floor(Math.random()*81) +1;
        if(!random.includes(n)){
            random.push(n);
            document.getElementById("cell_"+n).setAttribute("class","bomb");
        }
        else{
            i--;
        }
    }

    creatingResult();
    scoreResult();

  
}

function creatingResult(){
    var result= document.createElement("p");
    result.setAttribute("id","resultDisplay");
    document.getElementById("grid").appendChild(result);
    
}

function scoreResult(){
    var score = document.createElement("p");
    score.setAttribute("id","gameScore");
    document.getElementById("grid").appendChild(score);
    score.innerText = count;
}



