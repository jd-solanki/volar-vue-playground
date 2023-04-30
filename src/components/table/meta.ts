import type { ComponentObjectPropsOptions, PropType } from "vue"

export interface ATableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  rows?: T[]
}

export const aTableProps = <T extends Record<string, unknown> = Record<string, unknown>>() => ({
  rows: {
    type: Array as PropType<NonNullable<ATableProps<T>['rows']>>,
    default: () => [],
  },
} as const) satisfies Required<ComponentObjectPropsOptions<ATableProps<T>>>