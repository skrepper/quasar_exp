<script>
import { nextTick } from 'vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    async increment() {
      this.count++

      // DOM not yet updated
      console.log(document.getElementById('counter').textContent) // 0

      await nextTick()
      // DOM is now updated
      console.log(document.getElementById('counter').textContent) // 1
    }
  }
}
</script>

<template>
  <button id="counter" @click="increment">Количество кликов: {{ count }}</button>
</template>
