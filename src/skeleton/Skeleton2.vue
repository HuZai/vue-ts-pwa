<template>
  <div class="skeleton-wrapper">
    <header class="skeleton-header"></header>
    <section class="skeleton-block">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
      />
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
      />
    </section>
    <content-loader
      :height="160"
      :width="400"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
      <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
      <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
      <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
      <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
      <circle cx="30" cy="30" r="30" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    ContentLoader
  }
}
</script>

<style scoped>
.skeleton-header {
  height: 152px;
  background: grey;
  margin-top: 60px;
  width: 152px;
  margin: 60px auto;
}

.skeleton-block {
  display: flex;
  flex-direction: column;
  padding-top: 8px;
}
</style>
