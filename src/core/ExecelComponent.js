import {DomListener} from '@core/DomListener'

export class ExecelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepaer()
  }
  prepaer() {}
  // Возвращает шаблон компонетна
  toHtml() {
    return ''
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }
  destroy() {
    this.removeDomListeners()

    this.unsubscribers.forEach(unsub => unsub())
  }
}

