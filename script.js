

let more = document.querySelector(".checkbtn");
more.addEventListener("click", () => {
    let navb = document.querySelector(".menu");
    navb.classList.toggle("more");
    
    // ul.style.top = 0;
});

window.onscroll = function(ev) {
    if (window.scrollY > 30) {
         document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
         document.querySelector("header").style.transition = "0.5s"; 
         document.querySelector(".top").style.display = "block"; 
    }
    else{
        document.querySelector("header").style.backgroundColor = "transparent"; 
        document.querySelector("header").style.transition = "0.5s"; 
        document.querySelector(".top").style.display = "none"; 

    }
};

document.querySelector(".top").addEventListener("click",()=>{
    window.scrollY= 0;
   

})