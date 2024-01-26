/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from "@/auth"
import { LogOutIcon } from "../icons/icons"

import './styles.css'

export default async function UserBadge() {
  const session = await auth()
  const user = session?.user

  return (
    <div className="user__badge">

      {user?.image && (
        <picture><img src={user?.image} alt={'avatr of' + user?.name} /></picture>
      )}
      <div className="user__badge-info">
        <span>{user?.name}</span>
        <span>{user?.email}</span>
      </div>

      <form action={async () => {
        'use server'
        await signOut()
      }}>
        <button type="submit" title="LogOut" className="login touch">
          <LogOutIcon width='24' height='24' />
        </button>
      </form>
    </div>
  )
};