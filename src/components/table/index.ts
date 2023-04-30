import Table from './Table.vue'

export * from './meta'
export { Table }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Table = InstanceType<typeof Table>