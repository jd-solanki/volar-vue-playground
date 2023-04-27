<script lang="ts" setup>
import type { FooProps } from './props';
import { fooPropsDefaults } from './props';

const props = withDefaults(defineProps<FooProps>(), fooPropsDefaults)
</script>

<template>
    <p>Foo:</p>
    <pre>{{ props }}</pre>
</template>