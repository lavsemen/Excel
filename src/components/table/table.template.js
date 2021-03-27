const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
  <div class="cell" contenteditable ></div>
  `
}

function createCol(el) {
  return `
  <div class="collum">${el}</div>
  `
}

function createRow(rowData, rowInfo='') {
  return `
  <div class="row">
            
  <div class="row-info">${rowInfo}</div>

  <div class="row-data">${rowData}</div>
  </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowLen = 30) {
  const colCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')
  const cells = new Array(colCount)
      .fill(createCell())
      .join('')


  rows.push(createRow(cols))

  for (let i = 0; i < rowLen; i++) {
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
