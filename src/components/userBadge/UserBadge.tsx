import { auth } from "@/auth"
import Image from "next/image"

import './styles.css'

export default async function UserBadge() {
  const session = await auth()
  const user = session?.user

  return (
    <div className="user__badge">

      {user?.image && (
        <picture>
          <Image
            src={user?.image}
            alt={'avatr of' + user?.name}
            width={30} height={30} />
        </picture>
      )}
      <div className="user__badge-info">
        <span>{user?.name}</span>
        <span>{user?.email}</span>
      </div>


    </div>
  )
};