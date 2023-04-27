import type { OptionalKeysOf } from 'type-fest'

export type DefaultProps<T extends Object> = Pick<T, OptionalKeysOf<T>>