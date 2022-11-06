const yellow_btns = document.querySelectorAll('.yellow-btn');
console.log((yellow_btns))
for (let index = 0; index <= Object.length; index++) {
    yellow_btns[index].addEventListener("onmousedown", function(){
        yellow_btns[index].className = "yellow-btn-change";
    });
}