const rows = 20
const columns = 30

const mainEl = document.querySelector('main')
mainEl.style.width = `calc(25px * ${columns})`

for(let i = 0; i < rows; i++){
  const rowEl = document.createElement('div')
  rowEl.classList.add('row')

  for (let x = 0; x < columns; x++) {
    const columnEl = document.createElement('div')
    columnEl.classList.add('tile')

    rowEl.appendChild(columnEl)
  }
  mainEl.appendChild(rowEl)
}
