const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasButton = document.getElementById("mainasu-button")
const nibaiButton = document.getElementById("nibai-button")
// ボタンをクリックしたときの処理を登録
let count = 0
plusButton.onclick = function () {
  // ここにクリック後の処理を書く
  count += 1
  display.textContent = count
}
mainasButton.onclick = function () {
  count -= 1
  display.textContent = count
}
nibaiButton.onclick = function () {
  count = count * 2
  display.textContent = count
}
