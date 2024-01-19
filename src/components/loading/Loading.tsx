import { LoadingIcon } from "../icons/icons";

export default function Loading() {
  return (
    <div className="loader-comp">
      <LoadingIcon width='60' height='60' className='spin' />
    </div>
  )
};