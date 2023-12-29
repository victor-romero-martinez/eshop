import Card3d from "../ui/card3d/Card3d"
import './style.css'

export default function CategorySection() {
  return (
    <section className="container grid">
      <div className="card__container a">
        <Card3d text="Enjoy" title="With" backgroundText="earphone" image="/earphone.webp" color="#fff" background="#222222" coverColor="#C78B2C" />
      </div>
      <div className="card__container b">
        <Card3d text="New" title="Wear" backgroundText="gaget" image="/watch2.webp" background="#6A84C4" color="#fff" coverColor="#9FF9AD" />
      </div>
      <div className="card__container c">
        <Card3d text="Triend" title="Device" backgroundText="laptop" image="/laptop.webp" background="#f42c37" color="#fff" coverColor="#727397" />
      </div>
      <div className="card__container d">
        <Card3d text="Best" title="Gaming" backgroundText="console" image="/consola.webp" color="#133140" background="#BFF71F" coverColor="#83aa15" />
      </div>
      <div className="card__container e">
        <Card3d text="take" title="Photos" backgroundText="camera" image="/camara.webp" background="#133140" color="#fff" coverColor="#EDA249" />
      </div>
      <div className="card__container f">
        <Card3d text="New" title="With" backgroundText="watch" image="/tv.webp" background="#F71998" color="#fff" coverColor="#D4F29D" />
      </div>
    </section>
  )
};