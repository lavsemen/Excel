import {capitaloze} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Root not found in DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)

      const name = this.name || ''
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${name}`)
      } else {
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      }
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMetodName(eventName) {
  return 'on' + capitaloze(eventName)
}
