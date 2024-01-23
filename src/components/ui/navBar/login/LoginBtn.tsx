/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default async function LoginBtn({ email, image }: { email?: string, image?: string }) {

  return (
    <>
      {email ? (
        <Link href={'/profile'}>
          <img src={image} alt={`Avatar of ${email}`} width={24} />
        </Link>
      ) : (
        <Link href={"/login"}>Log in</Link>
      )}
    </>
  )
};