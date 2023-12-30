import { GuaranteeIcon, SupportIcon, TruckIcon, WalletIcon } from '@/components/icons/icons';
import './style.css'

export default function Feature() {
  return (
    <section className='container feature padding'>
      <div className='feature__inner'>
        <TruckIcon
          width="60"
          height="60"
          color='#f10617' />
        <div>
          <h4>Free Shipping</h4>
          <p>Free Shipping On All Order</p>
        </div>
      </div>
      <div className='feature__inner'>
        <GuaranteeIcon
          width="60"
          height="60"
          color='#f10617' />
        <div>
          <h4>Money Guarantee</h4>
          <p>30 Day Money Back</p>
        </div>
      </div>
      <div className='feature__inner'>
        <SupportIcon
          width="60"
          height="60"
          color='#f10617' />
        <div>
          <h4>Online Support 24/7</h4>
          <p>Tecnical Support 24/7</p>
        </div>
      </div>
      <div className='feature__inner'>
        <WalletIcon
          width="60"
          height="60"
          color='#f10617' />
        <div>
          <h4>Secure Payment</h4>
          <p>All Cards Accepted</p>
        </div>
      </div>
    </section>
  )
};