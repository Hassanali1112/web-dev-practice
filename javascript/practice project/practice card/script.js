// var cont = document.getElementById("container");
// for(i=0; i<=5; i++){
//     var myTag =document.createElement("div");
//     myTag.innerText = "Title";
//     cont.appendChild(myTag);
// }


var user =[
    {
    url :"images/01.jpg",
    name:"Hassan Ali",
    dis: "Lorem ipsum dolor sit amet consectetur,",

}
,{
    url :"images/02.jpg",
    name:"Faizan Ahmed",
    dis: "Lorem ipsum dolor sit amet consectetur,",
},
{
    url :"images/03.jpg",
    name:"Abdul Rehman",
    dis: "Lorem ipsum dolor sit amet consectetur,",
}
,{
    url :"images/01.jpg",
    name:"Hassan Ali",
    dis: "Lorem ipsum dolor sit amet consectetur,",
},
{
    url :"",
    name:"Taimoor Sadaqat",
    dis: "Lorem ipsum dolor sit amet consectetur,",
}
]

for(i=0; i<user.length; i++){
var container = document.getElementById("container")
var card = document.createElement("div");
container.appendChild(card);
var img = document.createElement("img");
img.src =user[i].url;
card.appendChild(img);
var title = document.createElement("h2");
title.innerHTML =user[i].name;
card.appendChild(title);
var cardDes = document.createElement("p");
cardDes.innerText = user[i].dis;
card.appendChild(cardDes);


}