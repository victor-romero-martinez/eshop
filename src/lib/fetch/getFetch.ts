/** get data */
export async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Filed to fetching data");
  }
  return await (res.json() as Promise<T>);
}
