import React from "react";
import donationImg from "./assets/donation.png";
import "./App.css";

export default function Donation() {
  return (
    <section id="donate" className="donation-section">
      <h2>Support Our Cause</h2>
      <p>Your donation helps us provide education, care, and dignity.</p>

      <div className="donation-content">
        <img
          src={donationImg}
          alt="Donation QR Code"
          className="donation-image"
        />

        <div className="donation-text">
          <p>
            <strong>CG State Council for Child Welfare</strong>
          </p>
          <p>Bank: Union Bank of India</p>
          <p>Branch: Rajbandha Maidan, Raipur</p>
          <p>A/C No: 015722010000793</p>
          <p>IFSC: UBIN0901571</p>
          <p className="donation-note">
            Donations eligible for tax exemption under Section 80G
          </p>
        </div>
      </div>
    </section>
  );
}
