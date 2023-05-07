<script lang="ts" setup generic="Row extends Record<string, unknown>">
import { objectKeys } from '../utils';
import { aTableProps, aTableSlots } from './meta';

const props = defineProps(aTableProps<Row>())

const _slots = aTableSlots<Row>(
    objectKeys(props.rows[0] || {}),
)
defineSlots<typeof _slots>()
</script>

<template>
    <div class="wrapper">
        <div v-for="row in props.rows">
        <header v-for="(col, index) in props.cols" :key="index">
            <slot :name="`header-${col.name}`" :col="col"></slot>
            <!--  This expression is not callable. Type '{}' has no call signatures. -->           
        </header>
        </div>
    </div>
</template>