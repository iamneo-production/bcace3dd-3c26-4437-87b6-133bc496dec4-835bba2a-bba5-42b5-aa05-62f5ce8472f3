import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="page-title">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>Artisan's Alley</strong> – Where Craft Meets Creativity!
      </p>

      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          At Artisan's Alley, we believe in the beauty of craftsmanship and the power of creativity.
          Our journey began with a simple idea: to create a platform that celebrates the talent and artistry of artisans from around the world.
          We envisioned a space where artisans could showcase their handmade creations, and customers could discover and acquire unique, handcrafted treasures.
        </p>
      </div>

      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower artisans and promote the art of handmade craftsmanship.
          We are passionate about preserving traditional artisanal skills and fostering a community of talented creators.
          We are dedicated to providing artisans with a platform to share their stories, connect with customers, and build thriving businesses.
        </p>
      </div>

      <div className="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>Dedication to Handmade: We are committed to promoting handmade products that carry the essence of artistry and dedication.</li>
          <li>Global Artistry: We celebrate diversity in craftsmanship, bringing artisans from different corners of the world together.</li>
          <li>Quality Assurance: Every product undergoes a thorough vetting process to meet our quality standards.</li>
          <li>Supporting Artisans: When you shop with us, you're supporting the livelihoods of artisans.</li>
        </ul>
      </div>

      <div className="our-community">
        <h2>Our Community</h2>
        <p>
          Artisan's Alley is more than just an online marketplace; it's a thriving community of artisans, customers, and craft enthusiasts.
          We encourage interaction, collaboration, and the sharing of ideas.
          Our blog, forums, and events foster connections and inspire creativity.
        </p>
      </div>

      <div className="join-us">
        <h2>Join Us</h2>
        <p>
          Whether you're an artisan looking to showcase your creations or a customer in search of one-of-a-kind handmade treasures,
          Artisan's Alley is your destination. Join our community and be part of a movement that celebrates craftsmanship, creativity, and the joy of handmade.
        </p>
      </div>

      <p className="contact-info">
        If you have any questions or would like to get in touch, please don't hesitate to contact us at <strong>contact@artisansalley.com</strong>.
      </p>
    </div>
  );
};

export default AboutUs;
