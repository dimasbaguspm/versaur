export const cx = (...classNames: (string | boolean | undefined)[]) => {
  return classNames.filter(Boolean).join(" ")
}
