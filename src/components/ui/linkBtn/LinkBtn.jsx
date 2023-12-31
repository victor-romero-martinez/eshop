import Link from "next/link";
import "./style.css";

/** Link buttom component
 * @param {object} props
 * @param {React.ReactNode} props.children - Element
 * @param {string} props.href - Link
 * @param {object} [props.styles] - CSSProperties
 * @description Use only flex container
 */
export default function LinkBtn({ children, href, styles }) {
  return (
    <Link href={href} className="link__bottom" style={styles}>
      {children}
    </Link>
  );
}
