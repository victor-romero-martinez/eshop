import Image from "next/image";
import LinkBtn from "../linkBtn/LinkBtn";
import "./style.css";

/** Card 3d component
 * @param {Object} props
 * @param {string} [props.text] - Small text
 * @param {string} props.title - Big text
 * @param {string} props.backgroundText - Text in background
 * @param {string} props.image - Image
 * @param {string} [props.btnText] - Text on btn
 * @param {string} [props.color] - Color text
 * @param {string}[ props.background] - Color background
 * @param {string}[ props.coverColor] - Color cover
 */
export default function Card({
  text,
  title,
  backgroundText,
  image,
  btnText = "Browse",
  color,
  background,
  coverColor = "#836CBB",
}) {
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
          {text} <br />
          <span>{title}</span>
        </h3>
        <LinkBtn
          href="#"
          title="browse"
          className="card__btn"
          styles={{ color: "#fff", backgroundColor: "#f66347" }}
        >
          {btnText}
        </LinkBtn>
      </div>
      <span className="background__text">{backgroundText}</span>
      {/* <img src={image} alt={`picture of ${backgroundText}`} /> */}
      <div className="cover" style={{ backgroundColor: coverColor }}></div>
      <Image
        src={image}
        alt={`picture of ${backgroundText}`}
        width={200}
        height={200}
      />
    </div>
  );
}
