import Link from "next/link";
import "./style.css";

/** Link bottom component
 * @param {object} props
 * @param {React.ReactNode} props.children - Element
 * @param {string} props.href - Link
 * @param {object} [props.styles] - CSSProperties
 */
export default function LinkBtn({ children, href, styles }) {
  return (
    <Link href={href} className="link__bottom" style={styles}>
      {children}
    </Link>
  );
}
