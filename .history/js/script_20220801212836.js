const yellow_btns = document.querySelectorAll('.yellow-btn')
const blue_btn = document.getElementsByClassName("blue-btn")

for(const yellow_btn of yellow_btns){
console.log(yellow_btn)
yellow_btn.onclick = function(){
    var yellow = yellow_btn.style.font-family
    console.log(yellow)
}
}
