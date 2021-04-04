import {ExecelComponent} from '@core/ExecelComponent'
import {$} from '@core/dom'
import {textEmitt} from './formula.func'

export class Formula extends ExecelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  toHtml() {
    return `
    <div class="info">fx</div>
          
    <div id="formula" class="input" contenteditable spellcheck="false">

    </div>

    `
  }

  init() {
    super.init()
    this.$formula = this.$root.find('#formula')
    const emitt = [
      'Table:TextContent',
      'Table:input',
      'Table:Select'
    ]
    textEmitt.call(this, emitt)
  }
  onInput(e) {
    this.$emit('formula:input', $(e.target).text())
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab']
    const {key} = e
    if (keys.includes(key)) {
      e.preventDefault()
      this.$emit('formula:done')
    }
  }
}
