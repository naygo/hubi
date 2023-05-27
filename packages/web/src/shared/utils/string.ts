export function removeAfterHyphen(str: string): string {
  const parts = str.split('-')
  return parts[0].trim()
}
