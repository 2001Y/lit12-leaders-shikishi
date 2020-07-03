history.scrollRestoration = "manual";
window.addEventListener("resize",Fscroll);
window.addEventListener("pageshow",Fscroll);

function Fscroll(){
    document.body.classList.remove('open');
    let width = document.documentElement.scrollWidth/2 - document.documentElement.clientWidth/2,
        height = document.documentElement.scrollHeight/2 - document.documentElement.clientHeight/2;
    window.scrollTo(width,height);
    main();
    setTimeout(function(){
        var el = document.querySelectorAll('img');
        for(var i=0; i<el.length; i++) {
            el[i].classList.toggle('img');
        }
    }, 300);
}
function main(){
    window.addEventListener('touchmove',img);
    window.addEventListener('scroll',img);
}
function img(){
    let w = window.innerWidth/2,
        h = window.innerHeight/2;
    var el = document.querySelectorAll('img');
    for(var i=0; i<el.length; i++) {
        var centerEle = el[i],
            center = centerEle.getBoundingClientRect(),
            centerX = (center.left + center.right)/2,
            centerH = (center.top + center.bottom)/2,
            distance = Math.sqrt(Math.pow(w - centerX,2) + Math.pow(h - centerH,2))*2,
            centerSize = 1.1-distance/Math.max(window.innerWidth,window.innerHeight);
        centerEle.style.transform = 'scale(' + centerSize + ') rotate(-45deg)';
        centerEle.style.opacity = centerSize;
    }
}

var el = document.querySelectorAll('a');
for(var i=0; i<el.length; i++) {
    el[i].onclick = function () {
        document.body.classList.toggle('open');
        let url = this.href;
        setTimeout(function(){
            window.location.href = url;
        }, 100);
        return false;
    }
}