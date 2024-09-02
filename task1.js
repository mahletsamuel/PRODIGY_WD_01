window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav");
    const scrollposition = window.scrollY;
    if (scrollposition > 50){
        nav.style.backgroundColor = "#222";}
    else{
        nav.style.backgroundColor = "#067890";
    }
});

const menu = document.querySelectorAll(".nav ul li a");
menu.forEach(item => {
    item.addEventListener("mouseover", ()=>{
        item.style.color = "#ff6347";
    });
    item.addEventListener("mouseout",()=>{
        item.style.color = "#fff";
    });
});