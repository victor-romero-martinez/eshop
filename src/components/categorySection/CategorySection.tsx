import Card from "../ui/card/Card"
import './style.css'

export default function CategorySection() {
  return (
    <section className="container grid padding">
      <div className="card__container a">
        <Card
          url="/products?category=smartphones"
          text="Enjoy"
          title="With"
          backgroundText="smatphone"
          image="/smartphone.webp"
          color="#fff"
          background="#222222"
          coverColor="#C78B2C" />
      </div>
      <div className="card__container b">
        <Card
          url="/products?category=mens-watches"
          text="New"
          title="Wear"
          backgroundText="gadgets"
          image="/watch2.webp"
          background="#6A84C4"
          color="#fff"
          coverColor="#9FF9AD" />
      </div>
      <div className="card__container c">
        <Card
          url="/products?category=laptops"
          text="Triend"
          title="Device"
          backgroundText="laptops"
          image="/laptop.webp"
          background="#f42c37"
          color="#fff"
          coverColor="#727397" />
      </div>
      <div className="card__container d">
        <Card
          url="/products?category=fragrances"
          text="Best"
          title="Fresh"
          backgroundText="fragrances"
          image="/fragance.webp"
          color="#133140"
          background="#BFF71F"
          coverColor="#83aa15" />
      </div>
      <div className="card__container e">
        <Card
          url="/products?category=sunglasses"
          text="good"
          title="Day"
          backgroundText="sunglasses"
          image="/sunglasses.webp"
          background="#133140"
          color="#fff"
          coverColor="#EDA249" />
      </div>
      <div className="card__container f">
        <Card
          url="/products?category=womens-bags"
          text="New"
          title="With"
          backgroundText="bags"
          image="/bag.webp"
          background="#F71998"
          color="#fff"
          coverColor="#D4F29D" />
      </div>
    </section>
  )
};