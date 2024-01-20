/** Post data
 * @param url
 * @param body
 */
export async function postData<T>(url: string, body: object): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Filed to fetching data. Status:", res.status);
  }

  return await (res.json() as Promise<T>);
}
