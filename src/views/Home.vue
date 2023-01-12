<script setup>
import SearchBar from './SearchBar.vue'
import Dialog from './Dialog.vue'
import List from './list.vue'
import { ref, reactive, computed, onMounted } from "vue";
</script>

<template>
  <main>
    <SearchBar></SearchBar>
    <Dialog></Dialog>
    <List></List>
  </main>
</template>

<style scoped></style>
