<template>
  <div class="home">
    <el-row :gutter="10" style="width: 100%;height: 100px;background: #ddd">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row style="width: 100%;">
      <img alt="Vue logo" src="../assets/logo.png" class="imgs" />
      <img alt="Vue logo" src="../assets/card1.png" class="imgs" />
    </el-row>

    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
    dadadC
    <draggable>
      <div>----dddd</div>
      <el-button>ddd</el-button>
    </draggable>
  </div>
</template>
<style lang="stylus" scoped>
.home
  width 100%
  overflow hidden
  z-index 10
  .imgs
    width 100px
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import draggable from 'vuedraggable'
@Component({
  components: {
    HelloWorld,
    draggable
  }
})
export default class Home extends Vue {
  beforeRouteEnter(to: any, from: any, next: () => void): void {
    console.log(this, 'beforeRouteEnter')
    next()
  }
  created() {
    this.$https({
      method: 'GET',
      url: '/leaf/page/index',
      params: {
        page: 1,
        count: 10,
        stockFirst: 1,
        isVip: 0
      }
    }).then((res: any) => {
      console.log(res)
    })
  }
}
</script>
