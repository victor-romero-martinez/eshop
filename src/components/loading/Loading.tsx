import { LoadingIcon } from "../icons/icons";
import './styles.css'

export default function Loading() {
  return (
    <div className="loader-comp">
      <LoadingIcon width='60' height='60' className='spin' />
    </div>
  )
};