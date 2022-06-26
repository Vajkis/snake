const rows = 21
const columns = 31

const mainEl = document.querySelector('main')
mainEl.style.width = `calc(25px * ${columns})`

const app = {
  data: {},
  reset: {},
  render: {},
  update: {}
}

app.reset.mainData = () => {
  app.data.main = []

  for(let x = 0; x < columns; x++){
    const row = []

    for (let y = 0; y < rows; y++) {
      row.push(0)
    }
    app.data.main.push(row)
  }
}

app.reset.snakeData = () => {
  app.data.snake = [
    {
      direction: 'right',
      x: 11,
      y: 11
    },

    {
      direction: 'right',
      x: 10,
      y: 11
    },

    {
      direction: 'right',
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

  for(let i = 0; i < app.data.snake.length; i++){
    const direction = {}

    switch (app.data.snake[i].direction) {
      case 'top':
        direction.head = 1
        direction.tail = -1
        break

      case 'right':
        direction.head = 2
        direction.tail = -2
        break

      case 'bottom':
        direction.head = 3
        direction.tail = -3
        break

      case 'left':
        direction.head = 4
        direction.tail = -4
        break
    }

    const x = app.data.snake[i].x
    const y = app.data.snake[i].y

    if(i === 0){
      app.data.main[x][y] = direction.head
    } else if(i === app.data.snake.length-1){
      app.data.main[x][y] = direction.tail
    } else{
      app.data.main[x][y] = tailBody
    }
  }
}

app.render.window = () => {
  mainEl.textContent = null

  for(let y = 0; y < rows; y++){
    const rowEl = document.createElement('div')
    rowEl.classList.add('row')

    for (let x = 0; x < columns; x++) {
      const columnEl = document.createElement('div')

      switch(app.data.main[x][y]){
        // empty
        case 0:
          columnEl.classList.add('tile')
          break

        // head
        case 1:
          columnEl.classList.add('headTop')
          break

        case 2:
          columnEl.classList.add('headRight')
          break

        case 3:
          columnEl.classList.add('headBottom')
          break

        case 4:
          columnEl.classList.add('headLeft')
          break

        // tail
        case -1:
          columnEl.classList.add('tailTop')
          break

        case -2:
          columnEl.classList.add('tailRight')
          break

        case -3:
          columnEl.classList.add('tailBottom')
          break

        case -4:
          columnEl.classList.add('tailLeft')
          break

        // tail body
        case 5:
          columnEl.classList.add('tail')
          break

        // food
        case 6:
          columnEl.classList.add('food')
          break
      }
      rowEl.appendChild(columnEl)
    }
    mainEl.appendChild(rowEl)
  }
}

app.start = () => {
  app.reset.mainData()
  app.reset.snakeData()
  app.reset.window()
  app.render.snakeData()
  app.render.window()
}

app.update.snakeData = () => {
  const x = app.data.snake[0].x
  const y = app.data.snake[0].y

  switch (app.data.snake[0].direction) {
    case 'top':
      if(app.data.main[x][y-1] === 0){
        // move code here
      } else if(app.data.main[x][y-1] === 6){
        // have food code here
      } else{
        // stop code here
      }
      break

    case 'right':
      if(app.data.main[x+1][y] === 0){
        app.data.snake.unshift({
          direction: 'right',
          x: x+1,
          y: y
        })

      app.update.mainData()

      } else if(app.data.main[x+1][y] === 6){
        // have food code here
      } else{
        // stop code here
      }
      break

    case 'bottom':
      if(app.data.main[x][y+1] === 0){
        // move code here
      } else if(app.data.main[x][y+1] === 6){
        // have food code here
      } else{
        // stop code here
      }
      break

    case 'lef':
      if(app.data.main[x-1][y] === 0){
        // move code here
      } else if(app.data.main[x-1][y] === 6){
        // have food code here
      } else{
        // stop code here
      }
      break

  }
}

app.update.mainData = () => {
  const {x, y} = app.data.snake.pop()

  app.data.main[x][y] = 0
  console.log('x:', x, 'y:', y)
  console.log(app.data.main)
  app.render.snakeData()
  app.render.window()
}

app.start()

window.addEventListener('click', app.update.snakeData)
window.addEventListener('ontouchstart', app.update.snakeData)
