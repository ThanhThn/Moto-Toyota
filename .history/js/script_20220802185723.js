const yellow_btns = document.querySelectorAll('.yellow-btn')
const blue_btns = document.querySelector('blue-btn')
console.log(yellow_btns)
console.log(blue_btns)
for(const yellow_btn of yellow_btns){
    yellow_btn.addEventListener('click', pushButton)
}

function pushButton(){

}
blue_btns.onClick = function(){
    blue_btns.className = 'blue-btn-change'
}