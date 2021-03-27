import {ExecelComponent} from '@core/ExecelComponent'
import {createTable} from './table.template'

export class Table extends ExecelComponent {
  static className = 'excel__table';
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'input']
    })
  }
  toHtml() {
    return createTable(50)
  }

  onClick(e) {
    const oldSelctor = this.$root.$el.querySelector('.selected')
    if (oldSelctor) {
      oldSelctor.classList.remove('selected')
    }
    if (e.target.classList.contains('cell')) {
      e.target.classList.add('selected')
    }
  }
}
