<template>
  <div>{{ result }} {{ v }}</div>
</template>

<script setup lang="ts">
defineProps<{
  v: string;
}>();

const result = await new Promise((r) => {
  setTimeout(() => {
    r("Hello world !");
  }, 500);
});
</script>
