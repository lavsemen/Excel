const CODES = {
  A: 65,
  Z: 90
}
function createCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-cell-index="${col}" 
        data-row="${row}"
        data-id="${row}:${col}"
        data-type="cell"
      ></div>
  `
  }
}

function createCol(el, index) {
  return `
  <div class="collum" data-type="resizeble" data-coll-index="${index}">
    ${el}
    <div class="col-resize" data-resize="col"></div>
  </div>
  
  `
}

function createRow(rowData, rowInfo='') {
  const resize = `
    <div class="row-resize" data-resize="row"></div>
  `

  return `
  <div class="row" data-type="resizeble">
            
  <div class="row-info" data-row-index="${rowInfo}">
     ${rowInfo}
    ${rowInfo? resize: ''}
  </div>
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

  rows.push(createRow(cols))

  for (let row = 0; row < rowLen; row++) {
    const cells = new Array(colCount)
        .fill('')
        // .map((_, col) => createCell(row, col))
        .map(createCell(row))
        .join('')
    rows.push(createRow(cells, row + 1))
  }

  return rows.join('')
}
