import Bar from './Bar.vue'

export * from './meta'
export { Bar }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Bar = InstanceType<typeof Bar>
