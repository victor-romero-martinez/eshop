import { auth, signOut } from "@/auth";

export default async function Page() {
  const user = await auth()
  return (
    <div className=" w-full grid__center">
      <h1>profile</h1>
      {user?.user?.image && <img src={user?.user?.image} />}
      <p>{user?.user?.email}</p>

      <form action={async () => {
        'use server'
        await signOut({
          redirectTo: '/'
        })
      }}>
        <button type="submit" className="btn__signout">
          Sign Out
        </button>
      </form>
    </div>
  )
};