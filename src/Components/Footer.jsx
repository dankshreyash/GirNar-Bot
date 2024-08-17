import './Footer.css';

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <div className="footer-section">
    //       <h2 className="footer-logo">DroneDekho</h2>
    //       <p>End to end Drone solutions under one Umbrella!</p>
    //     </div>
        
    //     <div className="footer-section">
    //       <h3>Contact Us</h3>
    //       <p>8484046870</p>
    //       <p>hello@dronedekho.co.in</p>
    //       <h3>Office</h3>
    //       <p>6 MEELEE, Gurukul Colony, behind Vanvihar Colony, Before, Suyog Colony, Parijat Nagar, Nashik, Maharashtra 422007</p>
    //     </div>
        
    //     <div className="footer-section">
    //       <h3>About Us</h3>
    //       <ul>
    //         <li>About</li>
    //         <li>Who we are</li>
    //         <li>Case Studies</li>
    //       </ul>
    //     </div>
        
    //     <div className="footer-section">
    //       <h3>Domains</h3>
    //       <ul>
    //         <li>Fly with us</li>
    //         <li>DroneDekho Center</li>
    //         <li>Drone Solutions</li>
    //         <li>DroneDukaan</li>
    //       </ul>
    //     </div>
        
    //     <div className="footer-section">
    //       <h3>Support</h3>
    //       <ul>
    //         <li>How it work</li>
    //         <li>T & C</li>
    //         <li>Privacy Policy</li>
    //       </ul>
    //     </div>
        
    //     <div className="footer-section">
    //       <h3>Social links</h3>
    //       <div className="social-icons">
    //         {/* Add social media icons here */}
    //       </div>
    //       <div className="language-selector">
    //         <select>
    //           <option>English</option>
    //           {/* Add more language options if needed */}
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer-bottom">
    //     <p>© Copyright 2024. All Rights Reserved by FlyLab Solutions Pvt Ltd</p>
    //   </div>
    // </footer>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" style={{textAlign: 'left'}}>
          <h2 className="footer-logo">GirNarBot</h2>
          <p>End to end Drone solutions under one Umbrella!</p>
        </div>
        
        <div className="footer-section" style={{textAlign: 'left'}}>
          <h3>Contact Us</h3>
          <p>7738292101</p>
          <p>girnarbot@gmail.com</p>
          <h3>Office</h3>
          <p>Elements,Kalyan Shil Road Thane 421204 </p>
        </div>
        
        <div className="footer-section" style={{textAlign: 'left'}}>
          <h3>About Us</h3>
          <ul>
            <li>About</li>
            <li>Who we are</li>
            <li>Case Studies</li>
          </ul>
        </div>
        
        <div className="footer-section" style={{textAlign: 'left'}}>
          <h3>Domains</h3>
          <ul>
            <li>Fly with us</li>
            <li>DroneDekho Center</li>
            <li>Drone Solutions</li>
            <li>DroneDukaan</li>
          </ul>
        </div>
        
        <div className="footer-section" style={{textAlign: 'left'}}>
          <h3>Support</h3>
          <ul>
            <li>How it work</li>
            <li>T & C</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="footer-section" style={{textAlign: 'right'}}>
          <h3>Social links</h3>
          <div className="social-icons">
            {/* Add social media icons here */}
          </div>
          <div className="language-selector">
            <select>
              <option>English</option>
              {/* Add more language options if needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024. All Rights Reserved by FlyLab Solutions Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;