import {DomListener} from '@core/DomListener'

export class ExecelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
  }
  // Возвращает шаблон компонетна
  toHtml() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
  destroy() {
    this.removeDomListeners()
  }
}

