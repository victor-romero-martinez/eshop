import "./style.css";

/** Buttom component
 * @param {object} props
 * @param {React.ReactNode} props.children - Element
 * @param {"button" | "reset" | "submit"} [props.type] - Button type
 * @param {object} [props.styles] - CSSProperties
 * @description Use only flex container
 */
export default function Btn({ children, type, styles }) {
  return (
    <button type={type} className="btn__style" style={styles}>
      {children}
    </button>
  );
}
