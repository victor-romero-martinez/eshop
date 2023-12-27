import Card3d from "../ui/card3d/Card3d"
import './style.css'

export default function CategorySection() {
  return (
    <section className="container">
      <div className="first">
        <div className="card__container a">
          <Card3d color="#fff" background="#6F08E6" />
        </div>
        <div className="card__container b">
          <Card3d background="#6A84C4" color="#fff" />
        </div>
        <div className="card__container c">
          <Card3d background="#5D191E" color="#fff" />
        </div>
      </div>
      <div className="second">
        <div className="card__container a">
          <Card3d color="#fff" background="#6F08E6" />
        </div>
        <div className="card__container b">
          <Card3d background="#6A84C4" color="#fff" />
        </div>
        <div className="card__container c">
          <Card3d background="#5D191E" color="#fff" />
        </div>
      </div>
    </section>
  )
};