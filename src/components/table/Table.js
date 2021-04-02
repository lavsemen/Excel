import {ExecelComponent} from '@core/ExecelComponent'
import {createTable} from './table.template'
import {resizeTable} from './table.resize'
import {shouldResize} from './table.function'

export class Table extends ExecelComponent {
  static className = 'excel__table';
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown']
    })
  }
  toHtml() {
    return createTable(50)
  }

  onClick(e) {
    const oldSelctor = this.$root.find('.selected')
    if (oldSelctor) {
      oldSelctor.classList.remove('selected')
    }
    if (e.target.classList.contains('cell')) {
      e.target.classList.add('selected')
    }
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeTable(event, this.$root)
    }
  }
}
