console.log('javascript working')
// const t = document.getElementsByClassName("secImg");
// t.addEventListener("click",function() {
//     alert("Button was clicked!");
// })
const button1 = document.querySelector(".firstCard");
const button2 = document.querySelector(".secCard");
const button3 = document.querySelector(".thirdCard");
const button4 = document.querySelector(".fourthCard");
const button5 = document.querySelector(".fifthCard");
// Add a click event listener
button1.addEventListener("mouseover", function() {
    var a = document.querySelector("#firstVideo");
    a.classList.add("secVidShow")
});
button1.addEventListener("mouseout", function() {
    var a = document.querySelector("#firstVideo");
    a.classList.remove("secVidShow")
});
button2.addEventListener("mouseover", function() {
    var a = document.querySelector("#secVideo");
    a.classList.add("secVidShow")
});
button2.addEventListener("mouseout", function() {
    var a = document.querySelector("#secVideo");
    a.classList.remove("secVidShow")
});
button3.addEventListener("mouseover", function() {
    var a = document.querySelector("#thirdVideo");
    a.classList.add("secVidShow")
});
button3.addEventListener("mouseout", function() {
    var a = document.querySelector("#thirdVideo");
    a.classList.remove("secVidShow")
});
button4.addEventListener("mouseover", function() {
    var a = document.querySelector("#fourthVideo");
    a.classList.add("secVidShow")
});
button4.addEventListener("mouseout", function() {
    var a = document.querySelector("#fourthVideo");
    a.classList.remove("secVidShow")
});
button5.addEventListener("mouseover", function() {
    var a = document.querySelector("#fifthVideo");
    a.classList.add("secVidShow")
});
button5.addEventListener("mouseout", function() {
    var a = document.querySelector("#fifthVideo");
    a.classList.remove("secVidShow")
});

// -------------------For Carouseld ------------------
const list = document.querySelector(".gallery");

list.addEventListener('scroll',()=>{
    // console.log(list.scrollLeft);
});
var i=0;
var isHovering = false;
function scrollX(){
    i = i + 420;
    if(i>5200)
    {
        i = 0;
    }
    list.scrollLeft = i;
    // console.log("i = "+i);
}
list.addEventListener('mouseover',()=>{
    isHovering = true;
});
list.addEventListener('mouseout',()=>{
    isHovering = false;
});


setInterval(function(){
    if(!isHovering)
    {
        scrollX();
    }
},1000);

// const list2 = document.querySelectorAll(".Cards2");
// list2.forEach(card =>{
//     card.scrollLeft = 80;
//     card.addEventListener("scroll", (event) => {
//         // console.log(card.scrollLeft +" ");
//     });

// });
// console.log(list.getElementsByTagName("img")[1]);

//I was sick for 2 days thats why not able create new project 
//Just don't want break streak in github
//Just want to flex 