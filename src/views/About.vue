<template>
  <div class="about" v-if="msg">
    <h1>This is an about page</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<style lang="stylus" scoped>
.test
  position absolute
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HelloWorld extends Vue {
  msg: string = ''
  created() {
    setTimeout(() => {
      this.msg = '你好啊'
    }, 500)
  }
}
</script>
