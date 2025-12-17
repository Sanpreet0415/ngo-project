import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="NGO Logo" className="logo" />
          <span className="ngo-name">
            Chhattisgarh State Council for Child Welfare
          </span>
        </div>
        <div className="nav-right">
          <a href="#about">About Us</a>
          <a href="#news">News</a>
          <a href="#mission">Mission & Vision</a>
          <a href="#donate" className="donate-btn">
            Donate
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="fade-in">Working for Specially-Abled Children</h1>
        <p className="fade-in delay">
          Empowering children with care, education & dignity
        </p>
      </section>

      {/* About Us */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We work for the welfare, rehabilitation, education, and empowerment of
          specially-abled children.
        </p>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section grid-2">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide inclusive education, healthcare, therapy, and skill
            development for every differently-abled child.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            A society where every child lives with dignity, independence, and
            equal opportunities.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section">
        <h2>Latest News & Activities</h2>
        <div className="news-grid">
          <div className="news-card">
            Garba & cultural program organised for divyang children
          </div>
          <div className="news-card">
            Inauguration of speech & hearing rehabilitation centre
          </div>
          <div className="news-card">
            Newspaper & media coverage of NGO initiatives
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="section reviews">
        <h2>Parents Reviews</h2>
        <div className="review-grid">
          <div className="review">
            “My child has shown great improvement and confidence.”
          </div>
          <div className="review">
            “Supportive staff and very positive environment.”
          </div>
          <div className="review">“This NGO has changed our child’s life.”</div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="donation-float">
        <h3>Support Our Cause</h3>
        <p>Your donation helps us build better lives.</p>
        <button>Donate Now</button>
      </section>

      <footer>© 2025 Chhattisgarh State Council for Child Welfare</footer>
    </div>
  );
}
