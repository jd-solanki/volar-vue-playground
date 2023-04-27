<script lang="ts" setup>
import type { BarProps } from './props';
import { barPropsDefaults } from './props';

const props = withDefaults(defineProps<BarProps>(), barPropsDefaults)
</script>

<template>
    <p>Bar:</p>
    <pre>{{ props }}</pre>
</template>