import { useState } from 'react';
import './App.css';
  
     


function TattooStyleCard(props) {
  return (
    <div className="tattoo-card">
      <div className="style-icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}


export default function App() {
  const [selectedStyle, setSelectedStyle] = useState("");

 

  const tattooStyles = [
    { id: 1, title: "Traditional Blackwork"  , description: "Bold solid black lines, heavy dark shading, and timeless iconic layouts." },
    { id: 2, title: "Fine Line Geometric"  , description: "Delicate needle work tracking intricate abstract patterns and exact precision math shapes." },
    { id: 3, title: "Body Piercing",  description: "Elevate your aesthetic with safe, precision piercing services performed in a strictly sanitized, state-certified studio environment.." },
    { id: 4, title: "Sketch work ", description: "Raw, sketchy line art combining fine needle hatching and expressive ink splatters for a dynamic hand-drawn aesthetic." }
  ];

  return (
    <div className="studio-container">
      

      <header className="hero-header">
        <div className="studio-logo">SHADOW  <span>INKK</span></div>
        <div className="booking-badge">Studios Open</div>
      </header>

      
      <section className="hero-banner">
        <h1>Custom Artistry Built For Skin</h1>
        <p>Premium custom compositions created by award-winning resident tattoo artists. We translate raw conceptual illustrations into precise permanent statement body art.</p>
        <div className="booking-badge" style={{ display: 'inline-block', cursor: 'pointer' }}>
        Book Consultation
        </div>
      </section>

      
      <h2 className="section-title">Our Specializations</h2>
      <section className="services-grid">
        {tattooStyles.map((style) => (
                <TattooStyleCard 
            key={style.id}
            title={style.title}
            icon={style.icon}
            description={style.description}
          />
        ))}
      </section>

      
      <section className="consultation-box">
        <h2>Design Your Custom Composition</h2>
        <p>Select your favorite core aesthetic style path below to begin detailing your custom consultation layout summary:</p>
        
        <div className="btn-group">
          {tattooStyles.map((style) => (
            <button
              key={style.id}
            
              className={`style-select-btn ${selectedStyle === style.title ? 'active' : ''}`}
              onClick={() => setSelectedStyle(style.title)}
            >
              {style.title}
            </button>
          ))}
        </div>

                {selectedStyle && (
          <div className="selection-summary">
            ⚡ Ready to coordinate your custom session for a <strong>{selectedStyle}</strong> design structure!
          </div>
        )}
      </section>

      <footer className="studio-footer">
        <div className="footer-column">
          <h4>📞 Contact</h4>
          <p><strong>Phone:</strong> <a href="tel:+9685032166" className="footer-link">+968 503 2166</a></p>
          <p><strong>Email:</strong> <a href="mailto:arcd2112@gmail.com" className="footer-link">arcd2112@gmail.com</a></p>
          <p><strong>Hours:</strong> Mon - Sun, 10:00 AM - 09:00 PM</p>
        </div>

        <div className="footer-column">
          <h4>📍 Studio</h4>
          <p><strong>SHADOW INKK TATTOO</strong></p>
          <p>Main Road Musakhedi</p>
          <p>Near Pintu Cycle, Indore, MP 452001</p>
        </div>

        <div className="footer-column">
          <h4>✨ Booking</h4>
          <p>Book your consultation online or walk in for a quick style check.</p>
          <p>Priority bookings are reserved for custom tattoo design sessions.</p>
          <p>All work is performed with professional hygiene and certified care.</p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} INK SOCIETY Studio. Designed for bold, lasting ink.</p>
        </div>
      </footer>
    </div>
  );
}