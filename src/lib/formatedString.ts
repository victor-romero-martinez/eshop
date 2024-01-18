/** Fix string */
export function formatedString(arr: string) {
  let res = arr.replace("-", " ");
  res = res.charAt(0).toUpperCase() + res.slice(1);

  return res;
}
