import {ExecelComponent} from '@core/ExecelComponent'

export class Formula extends ExecelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHtml() {
    return `
    <div class="info">fx</div>
          
    <div class="input" contenteditable spellcheck="false">

    </div>

    `
  }

  onInput(e) {
    (this.$root)
    console.log('Formula onInput', e.target.textContent.trim())
  }

  onClick(e) {
    console.log(this.$root)
    console.log('Formula onClick', e.target.textContent.trim())
  }
}
