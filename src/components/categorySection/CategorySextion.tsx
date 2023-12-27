import Card3d from "../ui/card3d/Card3d"
import './style.css'

export default function CategorySection() {
  return (
    <section className="container">
      <div className="first">
        <div className="card__container a">
          <Card3d text="Enjoy" title="With" backgroundText="earphone" image="/eearphone.png" color="#fff" background="#222222" />
        </div>
        <div className="card__container b">
          <Card3d text="New" title="Wear" backgroundText="gaget" image="/watch2.png" background="#6A84C4" color="#fff" />
        </div>
        <div className="card__container c">
          <Card3d text="Triend" title="Device" backgroundText="laptop" image="/laptop.png" background="#f42c37" color="#fff" />
        </div>
      </div>
      <div className="second">
        <div className="card__container a">
          <Card3d text="Best" title="Gaming" backgroundText="console" image="/consola.png" color="#323267" background="#edeef2" />
        </div>
        <div className="card__container b">
          <Card3d text="Play" title="Game" backgroundText="vr" image="/meta_quest.png" background="#133140" color="#fff" />
        </div>
        <div className="card__container c">
          <Card3d text="New" title="With" backgroundText="watch" image="/tv.png" background="#F71998" color="#fff" />
        </div>
      </div>
    </section>
  )
};