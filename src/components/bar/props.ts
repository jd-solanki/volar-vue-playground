import type { DefaultProps } from '../../utils'
import type { FooProps } from '../foo/props'
import { fooPropsDefaults } from '../foo/props'

export interface BarProps extends FooProps {
    isActive?: boolean
}

export const barPropsDefaults: DefaultProps<BarProps> = {
    ...fooPropsDefaults,
}