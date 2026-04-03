import "../styles/Clubs.scss";

const clubs = [
  {
    name: "Harar City",
    years: "2014 – 2016",
    country: "Ethiopia",
    img: "/harar.png",
  },
  {
    name: "Ethiopian Coffee",
    years: "2016 – 2022",
    country: "Ethiopia",
    img: "ethiopiabuna.png",
  },
  {
    name: "Mamelodi Sundowns",
    years: "2022 – Present",
    country: "South Africa",
    img: "/Mamelodi_Sundowns.png",
  },
  {
    name: "SuperSport United",
    years: "2024 – Present (Loan)",
    country: "South Africa",
    img: "/superlogo.jpg",
  },
];

const Clubs = () => {
  return (
    <section className="clubs-section" id="clubs">
      <h2>Clubs</h2>
      <div className="club-grid">
        {clubs.map((club, idx) => (
          <div className="club-card" key={idx}>
            <img src={club.img} alt={club.name} />
            <div className="club-info">
              <h3>{club.name}</h3>
              <p>{club.country}</p>
              <span>{club.years}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clubs;
