import Card from "../ui/card/Card"
import './style.css'

export default function CategorySection() {
  return (
    <section className="container grid padding">
      <div className="card__container a">
        <Card text="Enjoy" title="With" backgroundText="earphone" image="/earphone.webp" color="#fff" background="#222222" coverColor="#C78B2C" />
      </div>
      <div className="card__container b">
        <Card text="New" title="Wear" backgroundText="gaget" image="/watch2.webp" background="#6A84C4" color="#fff" coverColor="#9FF9AD" />
      </div>
      <div className="card__container c">
        <Card text="Triend" title="Device" backgroundText="laptop" image="/laptop.webp" background="#f42c37" color="#fff" coverColor="#727397" />
      </div>
      <div className="card__container d">
        <Card text="Best" title="Gaming" backgroundText="console" image="/consola.webp" color="#133140" background="#BFF71F" coverColor="#83aa15" />
      </div>
      <div className="card__container e">
        <Card text="take" title="Photos" backgroundText="camera" image="/camara.webp" background="#133140" color="#fff" coverColor="#EDA249" />
      </div>
      <div className="card__container f">
        <Card text="New" title="With" backgroundText="watch" image="/tv.webp" background="#F71998" color="#fff" coverColor="#D4F29D" />
      </div>
    </section>
  )
};