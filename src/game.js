const rows = 21
const columns = 31

const mainEl = document.querySelector('main')
mainEl.style.width = `calc(25px * ${columns})`

const app = {
  data: {},
  reset: {},
  render: {}
}

app.reset.mainData = () => {
  app.data.main = []

  for(let y = 0; y < rows; y++){
    const row = []

    for (let x = 0; x < columns; x++) {
      row.push(0)
    }
    mainData.push(row)
  }
}

app.reset.snakeData = () => {
  app.data.snake = [
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
}

app.reset.window = () => {
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
}

app.render.snakeData = () => {
  const direction = {}
  const tailBody = 5

  for(let i = 0; i < snakeData.length; i++){
    const direction = {}

    switch (app.data.snake) {
      case top:
        direction.head = 1
        direction.tail = -1
        break

      case right:
        direction.head = 2
        direction.tail = -2
        break

      case bottom:
        direction.head = 3
        direction.tail = -3
        break

      case left:
        direction.head = 4
        direction.tail = -4
        break
    }

    const x = snakeData[i].x
    const y = snakeData[i].y

    if(i === 0){
      mainData[x][y] = direction.head
    } else if(i === snakeData.length-1){
      mainData[x][y] = direction.tail
    } else{
      mainData[x][y] = tailBody
    }
  }
}

app.render.window = () => {
  mainEl.textContent = null

  for(let y = 0; y < rows; y++){
    const rowEl = document.createElement('div')
    rowEl.classList.add('row')

    for (let x = 0; x < columns; x++) {

      // need some code here

      const columnEl = document.createElement('div')
      columnEl.classList.add('tile')

      rowEl.appendChild(columnEl)
    }
    mainEl.appendChild(rowEl)
  }
}
