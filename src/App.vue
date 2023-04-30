<script setup lang="ts">
import ATable from './components/table/Table.vue';

const rows = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 31 },
]
</script>

<template>
  <p>Awesome</p>
  <ATable :rows="rows">
    <template #body="{ rows }">
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
        </tr>
      </tbody>
    </template>
  </ATable>
</template>
