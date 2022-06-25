const rows = 21
const columns = 31

const mainEl = document.querySelector('main')
mainEl.style.width = `calc(25px * ${columns})`

let mainData, snakeData

function resetGame(){
  // render main window
  mainEl.textContent = null

  for(let y = 0; y < rows; y++){
    const rowEl = document.createElement('div')
    rowEl.classList.add('row')

    for (let x = 0; x < columns; x++) {
      const columnEl = document.createElement('div')
      columnEl.classList.add('tile')

      rowEl.appendChild(columnEl)
    }
    mainEl.appendChild(rowEl)
  }

  // main window data
  mainData = []

  for(let y = 0; y < rows; y++){
    const row = []

    for (let x = 0; x < columns; x++) {
      row.push(0)
    }
    mainData.push(row)
  }

  // snake data
  snakeData = [
    {
      direction: 'left',
      x: 11,
      y: 11
    },

    {
      direction: 'left',
      x: 10,
      y: 11
    },

    {
      direction: 'left',
      x: 9,
      y: 11
    }
  ]

  renderSnake()
}

function renderSnake(){
  for(let i = 0; i < snakeData.length; i++){
    const x = snakeData[i].x
    const y = snakeData[i].y
    const dir 

    if(i === 0){
      mainData[x][y] =
    } else if(i === snakeData.length-1){

    } else{

    }
  }

  renderWindow()
}

function renderWindow(){

}

resetGame()
