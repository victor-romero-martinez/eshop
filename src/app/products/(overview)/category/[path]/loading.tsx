import { LoadingIcon } from "@/components/icons/icons";
import './style.css'

export default function Loading() {
  return (
    <div className="loader">
      <LoadingIcon width='40' height='40' className='anim' />
    </div>
  )
};