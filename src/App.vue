<script lang="ts" setup>
import Bar from './bar/Bar.vue';
const rows = [
    { name: 'John', age: 18 }
]
</script>

<template>
  <Bar :rows="rows" #header-name="{ col }">
      props: {{ col.name }}
  </Bar>
</template>