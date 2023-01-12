<script setup>
import { ref, reactive, computed, onMounted } from "vue";
</script>

<template>
  <div>
    <p id="no-item">暂无数据.</p>
    <div class="item">
      <div class="read-item">
        <img src="" alt="">
        <h2>百度一下，你就知道了</h2>
        <button> x </button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#no-item
  font-weight bold
  color silver
  text-align center
  width 100%
  position absolute
  top 100px
  z-index -1
.item
  .read-item
    display flex
    align-items center
    align-content center
    border-bottom lightgray 2px solid
    background #fafafa
    border-left 10px solid lightgray
    -webkit-user-select none
    position relative
    padding 10px
    img
      width 20%
      margin-right 25px
      border solid 1px #ccc
    &:hover
      background #eee
    &:hover button
      display inline-block
    &.selected
      border-left-color dodgerblue
    button
      position absolute
      display none
      right 10px
      top 10px
      width 30px
      height 30px
      background #f44336
      border none
      border-radius 50%
      color white
      text-align center
      font-size 14px
      cursor pointer
</style>
