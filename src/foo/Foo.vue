<script lang="ts" setup>
defineSlots<{ 'kebabCase'?: (_: any) => any }>()
</script>

<template>
    <div class="foo">
        <slot name="kebabCase"></slot>
    </div>
</template>