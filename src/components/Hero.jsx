import "../styles/Hero.scss";

const heroCards = [
  {
    img: "/sundowns 1.jpg",
    title: "Career Highlights",
    desc: "See his goals, assists, and performances.",
    link: "#highlights"
  },
  {
    img: "/super 1.jpg",
    title: "Training Sessions",
    desc: "Behind-the-scenes training photos.",
    link: "#training"
  },
  {
    img: "/abuli buna1.jpg",
    title: "On The Pitch",
    desc: "Powerful matchday photos and moments.",
    link: "#gallery"
  }
];

const Hero = () => {
  return (
    <section className="hero-row">
      {heroCards.map((card, index) => (
        <div key={index} className="hero-card">
          <img src={card.img} alt={card.title} />
          <div className="card-overlay">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <a href={card.link}>Explore →</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
