let memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
//テキストぼっくずの入力した値を取得
addButton.onclick = function () {
  const memonakami = memoInput.value
  console.log(memonakami)
}
//保存を押したら欄の内容がコンソールに表示される
const hozon = function (e) {
  console.log(e.target.value)
  memoContainer.textContent = e.target.value
}
memoInput.onclick = hozon
console.dir(memoInput)
//上の内容を、保存したいのだが
//add-buttonを押したら、
add = function () {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = memoContainer.textComent
}
addButton.onclick = add

addd = function () {
  const cardContainer = document.getElementById("memo-container")
  const card = document.createElement("div")
  card.textcontent = memoContainer
  cardContainer.append(card)
}
