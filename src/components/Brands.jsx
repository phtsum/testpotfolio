import "../styles/Brands.scss";

const brands = [
  {
    name: "YOYO DIAPER",
    img: "/yoyologo.png",
    link: "https://www.nike.com/",
  },
  {
    name: "DSTV",
    img: "/dstv.png",
    link: "https://www.puma.com/",
  },
  {
    name: "UMBRO",
    img: "/umbro.png",
    link: "https://www.umbro.com/",
  },
  {
    name: "GOFERE",
    img: "/gofere.png",
    link: "https://www.dstv.com/",
  },
];

const Brands = () => {
  return (
    <section className="brands-section" id="brands">
      <h2>BRANDS & PARTNERS</h2>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <a key={index} href={brand.link} target="_blank" rel="noopener noreferrer">
            <img src={brand.img} alt={brand.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Brands;
