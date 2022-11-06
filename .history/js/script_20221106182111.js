const yellow_btns = document.querySelectorAll('.yellow-btn');
console.log((yellow_btns))
function Hello(){
    confirm("Hello");
}
for (let index = 0; index < Object.length; index++) {
    yellow_btns[index].addEventListener("click", Hello);
}