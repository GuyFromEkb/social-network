export const classNames = (cls: string, mods: Record<string, boolean> = {}, additional: string[] = []) => {
  const filteredMods = Object.entries(mods).reduce<string[]>((acc, [cls, flag]) => {
    if (flag) acc.push(cls)
    return acc
  }, [])

  return [cls, ...additional, ...filteredMods].filter(Boolean).join(" ")
}
