const topLeft = document.querySelector('.top .left')
topLeft.addEventListener('click', select)

const topRight = document.querySelector('.top .right')
topRight.addEventListener('click', select)

const topCenter = document.querySelector('.top .center')
topCenter.addEventListener('click', select)

const middleLeft = document.querySelector('.middle .left')
middleLeft.addEventListener('click', select)

const middleRight = document.querySelector('.middle .right')
middleRight.addEventListener('click', select)

const middleCenter = document.querySelector('.middle .center')
middleCenter.addEventListener('click', select)

const bottomLeft = document.querySelector('.bottom .left')
bottomLeft.addEventListener('click', select)

const bottomRight = document.querySelector('.bottom .right')
bottomRight.addEventListener('click', select)

const bottomCenter = document.querySelector('.bottom .center')
bottomCenter.addEventListener('click', select)


let turn = 'X'
let click = 0


function select(){
  if(click % 2 === 0){
    turn = 'O'
  }
  if(click % 2 === 1){
    turn = 'X'
  }
  if(this.innerHTML == ''){
    this.innerHTML = turn
    this.value = turn
  }
  
  click++
  
}

function checkWin(){
  let winner = false
  if(bottomLeft.value == bottomCenter.value && bottomLeft.value !== ''){
    alert(`${bottomLeft} wins!`)
    winner = true
  }
  return winner
}

function play(){
  select()
  checkWin()
}
