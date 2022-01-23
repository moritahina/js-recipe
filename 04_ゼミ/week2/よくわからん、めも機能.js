const inputElement = document.grtElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
//追加ボタンを押したとき
addButton.onlicl = function () {
  //カードを作成する
  const card = createCard(inputElement.value)
  //valueって何だ？
  container.append(card)
  //cardをcontainerの中に移動する
  //入力欄を空にする
  inputElement.value = ""
}
const createCard = function (text) {
  //inputElement.valueが分からない
  const card = document.createElement("div")
  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)
  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
