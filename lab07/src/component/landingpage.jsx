import React from 'react';
import '../style/landingpage.css'; // Import CSS file

function LandingPage() {
  return (
    <div className="school-landing-container">
      
      <div className="school-landing-content">
        <h1 className="school-landing-title">Welcome to<button class="landing-title-button"> TABEER SCHOOLING!</button></h1>
        <p className="school-landing-subtitle">
          A place where excellence meets opportunity. Explore our dynamic programs and nurturing environment designed to help every student thrive.
        </p>
    
      </div>

      <div className="school-highlights">
        <div className="highlight">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs9L8gHso-7F1vZCqKqZUdGTgUttzIFIdBg&s" alt="Engaged Students" />
          <h3>Innovative Curriculum</h3>
          <p>Our programs are tailored to inspire creativity and critical thinking for students.</p>
        </div>
        <div className="highlight">
          <img src="data:image/jpeg;base64,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" alt="School Campus" />
          <h3>Beautiful Campus</h3>
          <p>State-of-the-art facilities to support learning and growth.</p>
        </div>
        <div className="highlight">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oqgSZVMSPQVdJ1sHQxs1_M19-bHjuVpLg&s" alt="Sports Activities" />
          <h3>Extracurricular Activities</h3>
          <p>From sports to arts, there's something for everyone.</p>
        </div>
        </div>

        <div className="user-details-form-container">
        <h2>Join Us Today!</h2>
        <form className="user-details-form">
          <label htmlFor="name">Name:</label>
          <input placeholder="Enter your name" />

          <label htmlFor="email">Email:</label>
          <input  placeholder="Enter your email" />

          <label htmlFor="phone">Phone Number:</label>
          <input placeholder="Enter your phone number"  />

          <button  className="submit-button">Submit</button>
        </form>
      </div>

      
      <footer className="school-footer">
        <div className="footer-content">
          <p>&copy; 2024 Tabeer Schooling. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;