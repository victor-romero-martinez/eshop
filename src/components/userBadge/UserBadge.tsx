/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth"

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
    </div>
  )
};