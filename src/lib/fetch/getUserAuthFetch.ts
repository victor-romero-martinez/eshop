/** GET user auth data
 * @param token - User token
 */
export async function GetUserByToken<T>(token: string): Promise<T> {
  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Filed to fetching data. Status", res.status);
  }

  return await (res.json() as Promise<T>);
}
