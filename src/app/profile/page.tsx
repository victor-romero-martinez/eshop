/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from "@/auth";
import { TUser } from "@/definitions/type";
import { GetUserByToken } from "@/lib/fetch/getUserAuthFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

export default async function Page() {
  const session = await auth()
  const token = session?.user?.token

  // error has ocurred
  if (!token) {
    return <h1>Error :(</h1>
  }

  const user = await GetUserByToken<TUser>(token)

  return (
    <div className=" w-full container padding">
      <h1>Profile</h1>

      <div className="grid__display">
        <section className="avatar__section">
          <img src={user.image} alt={`Avatar of ${user.username}`} />
          <span>{user.email}</span>
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
        </section>
        <section className="info__profile">
          <p><span>Username:</span> {user?.username}</p>
          <p><span>Id:</span> {user?.id}</p>
          <p><span>First name:</span> {user?.firstName}</p>
          <p><span>Last name:</span> {user?.lastName}</p>
          <p><span>Maiden name:</span> {user?.maidenName}</p>
          <p><span>Age:</span> {user?.age}</p>
          <p><span>Gender:</span> {user?.gender}</p>
          <p><span>Phone:</span> {user?.phone}</p>
          <p><span>Birth date:</span> {user?.birthDate}</p>
          <p><span>Blood group:</span> {user?.bloodGroup}</p>
          <p><span>Height:</span> {user?.height}</p>
          <p><span>Weight:</span> {user?.weight}</p>
          <p><span>Eye color:</span> {user?.age}</p>
          <p><span>Hair:</span> color: {user?.hair?.color} type:{user?.hair?.type}</p>
          <p><span>Domain:</span> {user?.domain}</p>
          <p><span>IP:</span> {user?.ip}</p>
          <p><span>Address:</span> {user?.address?.address} {user?.address?.city} {user?.address?.state} {user?.address?.postalCode}</p>
          <p><span>MAC address:</span> {user?.macAddress}</p>
          <p><span>University:</span> {user?.university}</p>
          <p><span>Bank:</span> N: {user?.bank?.cardNumber} type: {user?.bank?.cardType} currency: {user?.bank?.currency}</p>
          <p><span>Company:</span> {user?.company?.name}</p>?
          <p><span>Title:</span> {user?.company?.title}</p>
          <p><span>Department:</span> {user?.company?.department}</p>
          <p><span>Company address:</span> {user?.company?.address?.address} {user?.company?.address?.city}</p>
          <p><span>User agent:</span> {user?.userAgent}</p>
          <p><span>Cryptocurrency:</span> {user?.crypto?.coin}</p>
          <p><span>Wallet:</span> {user?.crypto?.wallet}</p>
          <p><span>Network:</span> {user?.crypto?.network}</p>
        </section>
      </div>
    </div>
  )
};