const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
addButton.onclick = function () {
  const text = memoInput.value
  //カードを追加する
  const card = document.createElement("div")
  card.className = "cards" //CSSのとき使う
  card.append(text)

  memoInput.value = ""
  //削除ボタンクリックで、削除
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
  memoContainer.append(card)
}
