export const inflect =
  (singular: string, plural = `${singular}s`) =>
  (quantity: number) =>
    Math.abs(quantity) === 1 ? singular : plural
