
// Функция добовляет в формулу все элементы с текстом
export function textEmitt(arr) {
  console.log(arr)
  arr.forEach(name => {
    this.$on(name, textContent => {
      this.$formula.text(textContent)
    })
  })
}
