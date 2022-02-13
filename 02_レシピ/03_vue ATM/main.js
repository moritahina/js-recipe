Vue.createApp({
  data() {
    return {
      inputValue: 0,
      rirekis: [],
      logs: [],
    }
  },
  methods: {
    addRireki: function () {
      this.rirekis.push(Number(this.inputValue))
      this.logs.push({ date: new Date(), type: "入金", money: this.inputValue })
    },
    removeRireki: function () {
      this.rirekis.push(Number(this.inputValue * -1))
      this.logs.push({ date: new Date(), type: "出金", money: this.inputValue })
    },
  },
  computed: {
    zandaka: function () {
      let price = 0
      for (let i = 0; i < this.rirekis.length; i++) {
        price += this.rirekis[i]
      }
      return price
    },
  },
}).mount("#ATM")
