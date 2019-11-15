<template>
  <div>
    <div>
      <p>Vue.js counter:「{{ counter }}」</p>
      <button @click="increment">increment</button>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {}
})
class Click extends Vue {
  counter = 0
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
