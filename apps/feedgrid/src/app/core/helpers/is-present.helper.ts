export function isPresent<T>(t: T | null | undefined | void): t is T {
  return t !== undefined && t !== null;
}
