import { MetaIcon, TwiterIcon, InstagramIcon, PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons/icons'
import Btn from '@/components/ui/Btnbtn/Btn'
import Image from "next/image";

import './style.css'

export default function Footer() {
  return (
    <footer className="container padding">
      <div className='social'>
        <Image src='/logo.webp' alt="loog" width={128} height={49} />
        <p>
          Page made for practice purposes, the data provided is merely illustrative obtained from <a href="https://dummyjson.com/" target='_blank' rel="noreferrer nofollow" >https://dummyjson.com</a>
        </p>
        <div>
          <a href='#' rel="noreferrer nofollow" target='_blank'>
            <MetaIcon width='20' height='20' />
          </a>
          <a href='#' rel="noreferrer nofollow" target='_blank'>
            <TwiterIcon width='20' height='20' />
          </a>
          <a href='#' rel="noreferrer nofollow" target='_blank'>
            <InstagramIcon width='20' height='20' />
          </a>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div>
          <span className='icon'>
            <PhoneIcon width='20' height='20' />
            <a href="tel:+(887) 530-2315" referrerPolicy='no-referrer' target='_blank'>(887) 530-2315</a>
          </span>
          <span className='icon'>
            <MailIcon width='20' height='20' />
            <a href='tomailto:waj@penobnad.gs' referrerPolicy='no-referrer' target='_blank'>waj@penobnad.gs</a>
          </span>
          <span className='icon'>
            <MapPinIcon width='20' height='20' />
            <address>1050 Kiga Pass, Lebanon</address>
          </span>
        </div>
      </div>
      <div className="subscription">
        <h3>Subscribe To Our Email</h3>
        <h2>For Latest News & Updates</h2>
        <label htmlFor="email">
          <input type="email" name="subsc" id="subsc" placeholder='Email' />
          <Btn type="submit">Subscribe</Btn>
        </label>
      </div>
    </footer>
  )
};