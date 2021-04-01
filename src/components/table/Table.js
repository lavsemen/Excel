import {ExecelComponent} from '@core/ExecelComponent'
import {createTable} from './table.template'
import {$} from '@core/dom'

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

  onMousedown(e) {
    if (e.target.dataset.resize) {
      const $resizer = $(e.target)
      const $perent = $resizer.closest('[data-type="resizeble"]')
      const cords = $perent.getCoords()
      const perentData = $perent.data.collIndex
      const cells = this.$root.findAll(`[data-cell-index="${perentData}"]`)
      const type = $resizer.data.resize


      $resizer.css({
        opacity: 1,
        width: type === 'row'
                         ? document.documentElement.clientWidth + 'px'
                         : null,
        height: type === 'col'
                         ? document.documentElement.clientHeight + 'px'
                         : null
      })

      let result;
      const resizeElement = (e) => {
        if (type === 'col') {
          const delta = e.pageX - cords.right
          const value = cords.width + delta

          result = value + 'px'
          $resizer.css({
            right: -delta + 'px',
          })
        } else {
          const delta = e.clientY - cords.bottom
          const value = cords.height + delta
          result = value + 'px'

          $resizer.css({
            bottom: -delta + 'px',
          })
        }
      }

      document.onmousemove = e => {
        resizeElement(e)
      }

      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null

        $resizer.css({
          width: type === 'col'
                      ? $perent.clientHeight
                      :null,
          height: type === 'row'
                      ? $perent.clientWidth
                      :null,

          right: 0,
          bottom: 0,
          opacity: 0,
        })
        if (type === 'col') {
          $perent.css({width: result})
          cells.forEach(item => item.style.width = result)
        } else {
          $perent.css({height: result})
        }
      }
    }
  }
}
