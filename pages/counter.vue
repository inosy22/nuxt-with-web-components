<template>
  <div class="margin-10">
    <div class="margin-10">
      <p>Vue.js counter:「 {{ counter }} 」</p>
      <button @click="increment">increment</button>
    </div>
    <hr />
    <div class="margin-10" v-html="html" />
  </div>
</template>

<style scoped>
.margin-10 {
  margin: 10px;
}
</style>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {}
})
class Click extends Vue {
  html = ''
  counter = 0
  constructor() {
    super()
    // scriptタグを直接入れようとするとうまく構文解析できないので分割して代入してますw
    this.html = `<script src="/counter.js"`
    this.html += `></scrip`
    this.html += `t><inosy22-counter></inosy22-counter>`
  }
  computed() {
    return {
      counter() {
        return this.counter
      }
    }
  }
  increment() {
    this.counter++
  }
}
export default Click
</script>
