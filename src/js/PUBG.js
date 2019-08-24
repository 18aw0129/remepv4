new Vue({
  el: "#top",
  data: {
    inUp: true
  },
  methods: {
    change() {
      this.inUp = !this.inUp
    },
    toHome() {
      location.href='memo/index.html'
    }
  },
  mounted() {
    
  }
})