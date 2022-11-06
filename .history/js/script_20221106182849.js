const yellow_btns = document.querySelectorAll('.yellow-btn');
console.log((yellow_btns))
for (let index = 1; index <= Object.length; index++) {
    yellow_btns[index].addEventListener("click", function(){
        console.log (index);
    });
}