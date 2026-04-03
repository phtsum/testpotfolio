import "../styles/Highlights.scss";

const Highlights = () => {
  return (
    <section className="video-highlight-section" id="highlights">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/highlight.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay that fades on hover */}
      <div className="dark-layer"></div>

      <div className="video-overlay">
        <h2>CAREER HIGHLIGHTS</h2>
        <h3>ABUBEKER NASSIR</h3>
        <p>From Ethiopian Coffee to Mamelodi Sundowns — watch his legendary moments.</p>
      </div>
    </section>
  );
};

export default Highlights;
