"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
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
 */
export default function Card3d({
  text,
  title,
  backgroundText,
  image,
  btnText = "Browse",
  color,
  background,
}) {
  // Crear una referencia al elemento HTML
  const cardRef = useRef(null);

  // Usar el hook useEffect para aplicar el efecto de inclinación cuando el componente se monta
  useEffect(() => {
    // Obtener el elemento HTML desde la referencia
    const card = cardRef.current;

    // Aplicar el efecto de inclinación con las opciones deseadas
    VanillaTilt.init(card, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
      axis: "x",
    });
  }, []);

  return (
    <div
      className="card__box"
      style={{
        color: color,
        backgroundColor: background,
      }}
      // Asignar la referencia al elemento HTML
      ref={cardRef}
    >
      <div className="card__text">
        <h3>
          {text} <br />
          <span>{title}</span>
        </h3>
        <span className="background__text">{backgroundText}</span>
        <Link href="#" title="browse" className="card__btn">
          {btnText}
        </Link>
      </div>
      <Image src={image} alt={backgroundText} width={200} height={200} />
    </div>
  );
}
