// render main window

const rows = 21
const columns = 31

const mainEl = document.querySelector('main')
mainEl.style.width = `calc(25px * ${columns})`

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

const data = []

for(let y = 0; y < rows; y++){
  const row = []

  for (let x = 0; x < columns; x++) {
    row.push(0)
  }
  data.push(row)
}

console.log(data);

// start at 11 column
