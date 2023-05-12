<script lang="ts" setup>
defineSlots<{
    before: { index: number }
    default: {},
    after: { text: string }

    // Below works
    // before: (_: { index: number }) => any
    // default: (_: any) => any,
    // after: (_: { text: string }) => any
}>()
</script>

<template>
    <div class="wrapper">
        <slot name="before" :index="1"></slot>
        <slot>
            <div>default slot</div>
        </slot>
        <slot name="after" text="after"></slot>
    </div>
</template>