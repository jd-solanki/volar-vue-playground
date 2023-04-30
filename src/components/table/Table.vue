<script lang="ts" setup generic="T extends Record<string, unknown> = Record<string, unknown>">
import { aTableProps } from './meta';

const props = defineProps(aTableProps<T>())
</script>

<template>
    <pre>{{ props }}</pre>
    <slot name="body" :rows="props.rows"></slot>
</template>