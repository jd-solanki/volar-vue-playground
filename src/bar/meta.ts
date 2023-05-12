import type { PropType } from 'vue';

export type RowKey<Row extends Record<string, unknown>> = keyof Row & string

export interface ATablePropColumn<Row extends Record<string, unknown>> {
  name: RowKey<Row>
}

export function aTableProps<const Row extends Record<string, unknown>>() {
  return {
    rows: {
      type: Array as PropType<Row[]>,
      default: () => [],
      },
    cols: {
      type: Array as PropType<ATablePropColumn<Row>[]>,
      default: () => [],
    },
  } as const
}

export function aTableSlots<Row extends Record<string, unknown>>(colKeys: RowKey<Row>[]) {
  return ({
    // If I comment below line then error in SFC is gone 🤔
    'before-table': (_: any) => null as any,
    
    ...colKeys.reduce((a, colKey) => (
      { ...a, [`header-${colKey}`]: Function }
    ), {} as { [name in `header-${RowKey<Row>}`]: (_ :{ col: ATablePropColumn<Row> }) => any }),
  }) as const
}