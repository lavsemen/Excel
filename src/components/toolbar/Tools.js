import {ExecelComponent} from '@core/ExecelComponent'

export class ToolBar extends ExecelComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
    super($root, {
      listeners: ['click'],
      name: 'ToolBar'
    })
  }

  toHtml() {
    return `
    <div class="button">
      <span class="material-icons">format_align_left</span>
    </div>

    <div class="button">
      <span class="material-icons">format_align_center</span>
    </div>

    <div class="button">
      <span class="material-icons">format_align_right</span>
    </div>

    <div class="button">
      <span class="material-icons">format_bold</span>
    </div>

    <div class="button">
      <span class="material-icons">format_italic</span>
    </div>

    <div class="button">
      <span class="material-icons">format_underline</span>
    </div>
    `
  }

  onClick(e) {
    console.log(e.target)
  }
}
