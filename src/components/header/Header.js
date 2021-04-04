import {ExecelComponent} from '@core/ExecelComponent'

export class Header extends ExecelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }

  toHtml() {
    return `
    <input type="text" class="input" value="Новая таблица"> 

    <div>

      <div class="button">
        <span class="material-icons">delete</span>
      </div>

      <div class="button">
        <span class="material-icons">logout</span>
      </div>

    </div>
    `
  }
}


