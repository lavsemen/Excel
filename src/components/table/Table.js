import {ExecelComponent} from '@core/ExecelComponent'
import {createTable} from './table.template'
import {resizeTable} from './table.resize'
import {shouldResize, isCell, nextSelector, matrix} from './table.function'
import {TableSelected} from './TableSelected'
import {$} from '@core/dom'

export class Table extends ExecelComponent {
  static className = 'excel__table';
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'click', 'keydown', 'input'],
      ...options
    }),
    this.eventActiv = false // debag
  }
  toHtml() {
    return createTable(50)
  }
  prepaer() {
    this.selection = new TableSelected
  }

  init() {
    super.init()
    this.selectCell(this.$root.find('[data-id ="0:0"]'))
    this.$on('formula:input', text => {
      this.selection.current.text(text)
    })
    this.$on('formula:done', num => {
      this.selection.current.focus()
    })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.$emit('Table:TextContent', $cell.text())
  }
  onClick(event) {
    if (isCell(event)) {
      const $target = $(event.target)
      this.$emit('Table:TextContent', $target.text())
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight'
    ]

    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()

      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector.call(this, key, id))
      this.selection.clear( )
      this.selectCell($next)
    }
  }
  onInput(event) {
    const $target = $(event.target)
    this.$emit('Table:input', $target.text())
  }


  onMousedown(event) {
    if (shouldResize(event)) {
      resizeTable(event, this.$root)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else if (event.ctrlKey) {
        this.selection.select($target)
      } else {
        this.selection.clear()
        this.selection.select($target)
      }
    }
  }
}
