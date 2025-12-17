import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Donation from "./Donation";

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

      {/* Hero */}
      <section className="hero">
        <h1>Working for Specially-Abled Children</h1>
        <p>Empowering children with care, education & dignity</p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We work for the welfare, rehabilitation, education, and empowerment of
          specially-abled children.
        </p>
      </section>

      {/* Mission */}
      <section id="mission" className="section grid-2">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide inclusive education, healthcare, therapy, and skill
            development.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            A society where every child lives with dignity and equal
            opportunity.
          </p>
        </div>
      </section>

      {/* News */}
      <section id="news" className="section">
        <h2>Latest News & Activities</h2>
        <div className="news-grid">
          <div className="news-card">
            Garba & cultural program organised for divyang children
          </div>
          <div className="news-card">
            Inauguration of speech & hearing rehabilitation centre
          </div>
          <div className="news-card">Media coverage of NGO initiatives</div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <h2>Parents Reviews</h2>
        <div className="review-grid">
          <div className="review">“My child has shown great improvement.”</div>
          <div className="review">
            “Supportive staff and positive environment.”
          </div>
          <div className="review">“This NGO changed our child’s life.”</div>
        </div>
      </section>

      {/* ✅ Donation section */}
      <Donation />

      <footer>© 2025 Chhattisgarh State Council for Child Welfare</footer>
    </div>
  );
}
