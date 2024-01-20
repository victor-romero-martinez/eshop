/** get data */
export async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.error("Filed to fetching data ->", res.status);
  }

  return await (res.json() as Promise<T>);
}
