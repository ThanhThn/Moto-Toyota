const yellow_btns = document.querySelectorAll('.yellow-btn')
const blue_btns = document.querySelector('.blue-btn')
blue_btns.onClick = function(){
    blue_btns.className = 'blue-btn-change'
    for(let i = 0; i< 100; i++){
        console.log(i)
    }
}