class Dom {
  constructor(selector) {
    // Строка
    this.$el = (typeof selector === 'string')
        ? document.querySelector(selector)
        : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  on(event, callback) {
    this.$el.addEventListener(event, callback)
  }

  off(event, callback) {
    this.$el.removeEventListener(event, callback)
  }
}

export function $(selector) {
  return new Dom(selector)
}

// Функция создания нового эллемента!!!

$.create = (tagName, classes='') => {
  const el = document.createElement('div')

  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}