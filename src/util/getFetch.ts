/** get data */
export async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await (res.json() as Promise<T>);
}
