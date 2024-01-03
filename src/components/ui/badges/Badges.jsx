import "./style.css";

/** Badges component
 * @param {{
 * children: React.ReactNode
 * }}
 */
export default function Badges({ children }) {
  return <span className="badges">{children}</span>;
}
