let el = document.querySelectorAll("span,h1");
history.scrollRestoration = "manual";
window.addEventListener("resize",scroll);
window.addEventListener("pageshow",scroll);
window.addEventListener("touchmove",img);
window.addEventListener("scroll",img);

function scroll(){
    let width = document.documentElement.scrollWidth/2 - document.documentElement.clientWidth/2;
    img();
}
function img(){
    var winScroll = document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = winScroll / height * document.querySelector("main>div").clientWidth;
    
    document.querySelector("main").style.width = scrolled + document.documentElement.clientWidth/2.7 + "px";
    
    let w = window.innerWidth/2;
    for(let i=0; i<el.length; i++){
        let centerEle = el[i],
            center = centerEle.getBoundingClientRect(),
            centerX = (center.left + center.right)/2,
            distance = Math.pow(w - centerX,2),
            centerSize = 1-distance/window.innerWidth/100;
        centerEle.style.opacity = centerSize;
    }
}img();