<template>
  <p>
    Prop:<b>{{ path }}</b>
  </p>
</template>

<script lang="ts" setup>
import { onServerPrefetch, onUpdated } from "vue";
const props = defineProps(["path"]);

onUpdated(() => {
  console.info("onUpdated", props);
});

onServerPrefetch(() => {
  console.info("onServerPrefetch", props);
});
</script>
