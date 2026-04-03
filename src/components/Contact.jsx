// Contact.jsx
import '../styles/contact.scss';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact & Socials</h2>
      <p className="contact-subtitle">Follow Abubeker on social media or get in touch through email.</p>
      <ul className="contact-list">
        <li>📧 Email: <a href="mailto:abubeker@example.com">abubeker@gmail.com</a></li>
        <li>📸 Instagram: <a href="https://instagram.com/abubeker_nassir" target="_blank" rel="noreferrer">abubeker_nassir</a></li>
        <li>🐦 Twitter: <a href="https://twitter.com/abubeker_nassir" target="_blank" rel="noreferrer">abubeker_nassir</a></li>
      </ul>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Abubeker Nassir. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
