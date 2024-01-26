import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <Image
        src='/logo.webp'
        alt="phlox logo"
        width={128}
        height={49}
        priority
        className="logo-img"
      />
    </Link>
  )
};