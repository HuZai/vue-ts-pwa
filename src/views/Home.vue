<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="img" />
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
    dadadC
  </div>
</template>
<style lang="stylus" scoped>
.home
  width 180px
  z-index 10
  display flex
.img
  display flex
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  beforeRouteEnter(to: any, from: any, next: () => void): void {
    console.log(this, 'beforeRouteEnter')
    next()
  }
  created() {
    console.log(this)
    console.log(this.$route.query)
    this.$https({
      method: 'GET',
      url: '/leaf/products/list',
      params: {
        page: 1,
        count: 10,
        stockFirst: 1,
        isVip: 0
      }
    }).then((res: any) => {
      console.log(res)
    })
    console.log(this)
  }
}
</script>
