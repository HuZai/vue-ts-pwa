<template>
  <div class="box_px"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Preview extends Vue {
  name: String = 'Preview'
}
</script>

<style scoped lang="stylus">
.box_px
    display flex
    width 375px
    position absolute
    top 70px
    bottom 10px
    left 10px
    background var(--color-gray)
</style>
