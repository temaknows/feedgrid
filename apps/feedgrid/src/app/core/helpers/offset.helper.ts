export function getOffsetX(pageX: number, parent: HTMLElement) {
  return pageX - parent.getBoundingClientRect().left;
}
