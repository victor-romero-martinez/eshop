"use client";
import "./style.css";

/** Buttom component Client
 * @param {object} props
 * @param {React.ReactNode} props.children - Element
 * @param {"button" | "reset" | "submit"} [props.type] - Button type
 * @param {object} [props.styles] - CSSProperties
 * @param {import("react").MouseEventHandler} [props.click] - CSSProperties
 * @description Use only flex container
 */
export default function Btn({ children, type, styles, click }) {
  return (
    <button type={type} className="btn__style" style={styles} onClick={click}>
      {children}
    </button>
  );
}
