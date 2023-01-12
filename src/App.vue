<script setup>
import Home from "./views/Home.vue";
import { ref, reactive, computed, onMounted, provide } from "vue";
// 状态
const isShow = ref(false);
const setIsShow = (value) => {
  isShow.value = value;
};
provide("dialog-show", { isShow, setIsShow });
</script>

<template>
  <Home />
</template>

<style scoped></style>
