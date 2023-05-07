export function generateSlots<T extends string[], const I extends T[number]>(slotNames: I[]): Record<I, (_: any) => any> {
  const slots = {} as any
  for (const name of slotNames)
    slots[name] = (_: any) => null as any

  return slots
}

export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj) as Array<keyof T & string>
}