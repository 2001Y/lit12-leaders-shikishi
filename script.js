let el = document.querySelectorAll("img"),
    aEl = document.querySelectorAll("a");
history.scrollRestoration = "manual";
window.addEventListener("resize",scroll);
window.addEventListener("pageshow",scroll);
window.addEventListener("touchmove",img);
window.addEventListener("scroll",img);

for(let i=0; i<aEl.length; i++){
    aEl[i].onclick = function(){
        document.body.classList.add("open");
        let url = this.href;
        setTimeout(function(){
            window.location.href = url;
        },100);
        return false;
    }
}
setTimeout(function(){
    for(let i=0; i<el.length; i++){
        el[i].classList.toggle("img");
    }
    img();
},300);

function scroll(){
    let width = document.documentElement.scrollWidth/2 - document.documentElement.clientWidth/2,
        height = document.documentElement.scrollHeight/2 - document.documentElement.clientHeight/2;
    window.scrollTo(width,height);
    img();
}
function img(){
    let w = window.innerWidth/2,
        h = window.innerHeight/2;
    for(let i=0; i<el.length; i++){
        let centerEle = el[i],
            center = centerEle.getBoundingClientRect(),
            centerX = (center.left + center.right)/2,
            centerH = (center.top + center.bottom)/2,
            distance = Math.sqrt(Math.pow(w - centerX,2) + Math.pow(h - centerH,2))*2,
            centerSize = 1.1-distance/Math.max(window.innerWidth,window.innerHeight);
        centerEle.style.transform = "scale(" + centerSize + ") rotate(-45deg)";
        centerEle.style.opacity = centerSize;
    }
}