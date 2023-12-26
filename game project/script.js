var timer = 60;
var score =0;
var hitRanNum = 0;
function createBubbles(){
    var box = "";
for(i=1; i<=96; i++){
    var ranNum = Math.floor(Math.random()*10);
    box += `<div class="bubble">${ranNum}</div>`
}
document.getElementById("panel-bottom").innerHTML = box;
}
function decreaseTime(){
    let timeint = setInterval(function(){
        document.querySelector("#decTime").textContent = timer;
        if(timer >0){
            timer--;
        } else{
            clearInterval(timeint);
            document.getElementById("panel-bottom").innerHTML = `<h1 id="finalMes">Game Over <br> Scored ${score}</h1>`
        } 
    },1000)
   
}
function newHit(){
    hitRanNum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =hitRanNum;
}
function updateScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
decreaseTime();
createBubbles();
newHit();
document.querySelector("#panel-bottom").addEventListener("click",function(details){
    var clickedNum = (Number(details.target.textContent));
    if(clickedNum === hitRanNum){
        updateScore();
        createBubbles()
        newHit();
    };
})