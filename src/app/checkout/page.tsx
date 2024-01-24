import Link from 'next/link'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import './styles.css'
import CheckOutItems from '@/components/checkoutTest/CheckOutItems'

export default async function CheckOutPage() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='container padding h-vh grid__center'>
      <div>
        <h1>Congratulations</h1>
        <h3>End of the tour</h3>
        <Link href='/' className='gohome'>
          Home
        </Link>
        <CheckOutItems />
      </div>
    </div>
  )
};