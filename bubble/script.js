var bubbleRN= "";
var score =0;
var hitRN= "";
var time = 60;
function createBubble (){
    var bubble = "";
    for(i=1; i<81; i++){
        bubbleRN = Math.floor(Math.random()*10);
        bubble +=  `<div class="bubble">${bubbleRN}</div>`
     document.getElementById("bottom-panel").innerHTML = bubble;
    }
}
function hitRandomNum(){
     hitRN = Math.floor(Math.random()*10);
    document.getElementById("hit").textContent = hitRN;
}
function updateScore(){
    score += 10;
    document.getElementById("score").textContent = score;
}
function Timer(){
    var timeInt = setInterval(function(){
        if(time > 0){
        time--;
        document.getElementById("timer").textContent = time;
    } else{
        clearInterval(timeInt);
        document.getElementById("timer").textContent = 0;
    }
}

    ,1000)
    
} 

    var bubblevalue = document.getElementById("bottom-panel");
    bubblevalue.addEventListener("click",function(panel){
        var value = Number(panel.target.textContent);
        console.log(value);
        if(hitRN===value){
            updateScore();
            hitRandomNum();
            createBubble ();
        }
    })
    Timer()
createBubble ();
hitRandomNum();