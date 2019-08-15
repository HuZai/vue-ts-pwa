<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">定制中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title"
          >我的收藏</template
        >
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>
<style lang="stylus">
@import "assets/css/variables.css"
@import "assets/css/global.css"

body,html
  height 100%
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  activeIndex: String = '1'
  handleSelect() {
    console.log()
  }
}
</script>
