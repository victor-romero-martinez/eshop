/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default async function LoginBtn({ email, image }: { email?: string, image?: string }) {

  return (
    <>
      {email ? (
        <Link href={'/profile'} className="login__btn-img touch">
          <img src={image} alt={`Avatar of ${email}`} width={24} />
        </Link>
      ) : (
        <Link href={"/login"} className="login__btn touch">Log in</Link>
      )}
    </>
  )
};