<script setup>
import { ref, reactive, computed, onMounted, inject } from "vue";
const {setIsShow} = inject('dialog-show')
const handleClick = () => {
  setIsShow(true)
};
</script>

<template>
  <div class="search-container">
    <div class="button" @click="handleClick">+</div>
    <div class="input">
      <input type="text" placeholder="请输入关键字..." />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
div.search-container
  height 60px
  background #d3d3d3
  display flex
  align-items center
  justify-content center
  padding-left 10px
  .button
    width 40px
    height 40px
    background-color #1e90ff
    padding-left 0
    border-redius 5px
    font-size 30px
    font-weight bold
    color #fff
    text-align center
    cursor default
  .input
    flex 1
    height 36px
    padding 0 10px
    input
      height 100%
      width 100%
      outline none
      border solid 1px #ccc
      border-redius 5px
      padding 0 10px
</style>
