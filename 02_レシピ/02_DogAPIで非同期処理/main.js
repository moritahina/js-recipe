const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
  const charactor={
    mane:"ぴよぴよ"
    mother: {
            name:　"ちゅんちゅん"
            color:　"茶色"}
      hobbies:["人助け","食べること","飛ぶこと"]
  }
 console.log(charactor.mother.name)
console.log(charactor.hobbies[0])

sayHello: function() {
    console.log("ブンブンハロー YouTube")}