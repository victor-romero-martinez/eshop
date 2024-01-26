import { signOut } from "@/auth"
import { LogInIcon, LogOutIcon } from "@/components/icons/icons"
import Link from "next/link"

export default async function LoginBtnNav({ isLogin }: { isLogin: boolean }) {

  return (
    <>
      {isLogin ? (
        <form action={async () => {
          'use server'
          await signOut()
        }}>
          <button type="submit" title="LogOut" className="login">
            <LogOutIcon width='24' height='24' />
          </button>
        </form>
      ) : (
        <Link href={"/login"} className="logout" title="LogIn">
          <LogInIcon width='24' height='24' />
        </Link>
      )}
    </>
  )
};

