import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <section className="mission-vision">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best quality products at the most competitive prices with unmatched customer service. We strive to exceed our customers' expectations and bring them unique products they will love.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading e-commerce platform, recognized for our commitment to excellence and our ability to connect customers with the products they need and desire.
          </p>
        </section>
        
        <section className="history">
          <h2>Our History</h2>
          <p>
            Founded in [Year], [Your E-Commerce Site Name] started with a simple idea of making quality products accessible to everyone. Over the years, we have grown into a trusted brand with a loyal customer base. Our journey began in [Location] and has now expanded globally, serving customers from all over the world.
          </p>
        </section>
        
        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/269717270_1597303677281539_729699827083651198_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xz77kU6dPtAQ7kNvgG79Y1x&_nc_ht=scontent.fktm8-1.fna&oh=00_AYCEiJKPOVRRDtyYSTZrZ-vR12I8b89AFG6a6seJXTDYTw&oe=6678F39F" alt="Team Member" />
              <h3>Mahendra Bohara</h3>
              <p>Creater</p>
            </div>
            <div className="team-member">
              <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/313424767_100738326191255_5165421549791315875_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JP4f4oEJXqYQ7kNvgGf_tyM&_nc_ht=scontent.fktm8-1.fna&oh=00_AYCYkuQLMNfJjM_4BJFSo2jBZNCxW0lDSiZlhDuUOnYUOQ&oe=667911BB" alt="Team Member" />
              <h3>Bipin Bhatt</h3>
              <p>Founder</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
        
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or comments, please don't hesitate to contact us.</p>
          <ul>
            <li><strong>Email:</strong> info@sitename.com</li>
            <li><strong>Phone:</strong> +45778978965</li>
            <li><strong>Address:</strong> 29 Street, Shantinagar Baneshwor, Kathmandu, Nepal</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
