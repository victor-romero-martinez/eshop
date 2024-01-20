/** Post data */
export async function postData<T>(url: string, body: object): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/jsno" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Filed to fetching data", res.status);
  }

  return await (res.json() as Promise<T>);
}
