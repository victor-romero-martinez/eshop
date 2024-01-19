import { LoadingIcon } from "@/components/icons/icons";

export default function Page() {
  return (
    <div className="h-vh w-full grid__center">
      <LoadingIcon width='60' height='60' className='spin' />
    </div>
  )
};