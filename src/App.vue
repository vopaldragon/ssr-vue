<template>
  <div>
    <p>AppPath:{{ $props }}</p>
    <button @click="changePage('/a')">move to /a</button>
    <button @click="changePage('/b')">move to /b</button>
    <div>Normal:<Page v-bind="$props" /></div>
    <div>Slot:<slot v-bind="$props" /></div>
  </div>
</template>

<script lang="ts" setup>
import Page from "./Page.vue";
import { changePath } from "./main.js";
const props = defineProps(["path"]);
function changePage(path) {
  changePath(path);
}
</script>
