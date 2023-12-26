import Image from "next/image";
import Link from "next/link";
import "./style.css";

/** Card 3d component
 * @param {Object} props
 * @param {string} [props.color] - Color text
 * @param {string}[ props.background] - Color background
 */
export default function Crad3d({ color, background }) {
  return (
    <div
      className="card__box"
      style={{
        color: color,
        backgroundColor: background,
      }}
    >
      <div className="card__text">
        <h3>
          Enjoy <br />
          <span>With</span>
        </h3>
        <span className="background__text">earphone</span>
        <Link href="#" title="browse" className="card__btn">
          Browse
        </Link>
      </div>
      <div className="card__img">
        <Image src="/eearphone.png" alt="eearphone" fill />
      </div>
    </div>
  );
}
