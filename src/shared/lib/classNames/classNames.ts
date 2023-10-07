export const classNames = (
  cls: string | (string | undefined)[],
  mods: Record<string, boolean | undefined> = {},
  additional?: (string | undefined)[] | string
) => {
  const filteredMods = Object.entries(mods)
    .filter(([, flag]) => flag)
    .map(([cls]) => cls)

  return [
    ...(Array.isArray(cls) ? cls : [cls]),
    ...filteredMods,
    ...(Array.isArray(additional) ? additional : [additional]),
  ]
    .filter(Boolean)
    .join(" ")
}
