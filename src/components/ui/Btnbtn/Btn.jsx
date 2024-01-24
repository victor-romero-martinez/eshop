"use client";
import "./style.css";

/** Buttom component Client
 * @param {object} props
 * @param {React.ReactNode} props.children - Element
 * @param {"button" | "reset" | "submit"} [props.type] - Button type
 * @param {object} [props.styles] - CSSProperties
 * @param {() => void} [props.click] - Click event
 * @param {boolean} [props.isDisable] - Disable default `false`
 * @description Use only flex container
 */
export default function Btn({
  children,
  type,
  styles,
  click,
  isDisable = false,
}) {
  return (
    <button
      type={type}
      className="btn__style"
      style={styles}
      onClick={click}
      disabled={isDisable}
    >
      {children}
    </button>
  );
}
