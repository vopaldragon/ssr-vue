<template>
  <div>
    <button @click="changePage('/a')">move to /a</button>
    <button @click="changePage('/b')">move to /b</button>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { changePath } from "./main.js";

function changePage(path) {
  changePath(path);
}
</script>
