import {range} from '@core/utils'

export function shouldResize(e) {
  return e.target.dataset.resize
}

export function isCell(e) {
  return e.target.dataset.type === 'cell'
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  const ids = cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])

  return ids
}


export function nextSelector(key, {col, row}) {
  const MIN_VALUE = 0
  const MAX_COL_VALUE = this.$root.findAll('[data-coll-index]').$el.length
  const MAX_ROW_VALUE = this.$root.findAll('[data-row-index]').$el.length - 1

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row = row + 1 < MAX_ROW_VALUE? row + 1: row

      break
    case 'Tab':
    case 'ArrowRight':
      col = col + 1 < MAX_COL_VALUE? col + 1: col
      break
    case 'ArrowLeft':
      col = col - 1 >= MIN_VALUE? col - 1: col
      break
    case 'ArrowUp':
      row = row - 1 >= MIN_VALUE? row - 1: row
      break
  }

  return `[data-id="${row}:${col}"]`
}
