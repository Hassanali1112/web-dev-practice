var time = 60;
var score = 0;
var hitRanNum;
var bottompanel = document.querySelector("#bottom-panel");
var starthidden = document.getElementById("start");
function createBubbles(){
    var bubble= "";
    for(var i=1; i<71; i++){
        var ranNum = Math.floor(Math.random()*10);
        bubble += `<div class="bubble" id="bubble">${ranNum}</div>`
        document.getElementById("bottom-panel").innerHTML = bubble;
    }
}

function runTimer(){
    var timeInt = setInterval(function(){
        time--;
        if(time>0){
        document.getElementById("timer").textContent = time;
    } else { 
        clearInterval(timeInt);
        document.getElementById("timer").textContent = time;
        document.getElementById("bottom-panel").innerHTML =`<h1 style="font-size: 3vmax;">Game Over</h1> <br>
        <p style="font-size: 3vmax;">You have scored ${score} points<p>`;
        document.getElementById("hitelm").textContent =0;
       
    }
    },1000)
}
function newHitVal(){
    hitRanNum = Math.floor(Math.random()*10);
    document.getElementById("hitelm").textContent = hitRanNum;
}
function updateScore(){
    score += 10;
    document.getElementById("score").textContent = score;
}
bottompanel.addEventListener("click",function(event){
   var clickedNum = Number(event.target.textContent);
   if(clickedNum === hitRanNum){
    updateScore();
    createBubbles();
    newHitVal();
   }
})
function startGame(){
   starthidden.style.display ="none";
    newHitVal();
    runTimer();
    createBubbles();
}
