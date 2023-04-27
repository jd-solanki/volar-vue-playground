import type { DefaultProps } from '../../utils'

export interface FooProps {
    color?: 'primary' | 'secondary'
}

export const fooPropsDefaults: DefaultProps<FooProps> = {
    color: 'primary'
}