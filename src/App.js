import React from "react";
import "./index.css";

function App() {

  return(
    <div className="contacts">
      <div className="contact-card">
        <img src={require('./Img/bible.jpg')} alt="Bible"/>
        <h3>The Bible</h3>
        <p>Phone: "07012345678"</p>
        <p>Email: "bible@bible.com"</p>
      </div>
      <div className="contact-card">
        <img src={require('./Img/at-icon.jpg')} alt="at-icon"/>
        <h3>Email Logo</h3>
        <p>Phone: "08012345678"</p>
        <p>Email: "email@email.com"</p>
      </div>
      <div className="contact-card">
        <img src={require('./Img/facebook-icon.png')} alt="Facebook"/>
        <h3>Facebook Logo</h3>
        <p>Phone: "08112345678"</p>
        <p>Email: "facebook@facebook.com"</p>
      </div>
      <div className="contact-card">
        <img src={require('./Img/twitter-icon.png')} alt="Twitter"/>
        <h3>Twitter logo</h3>
        <p>Phone: "09012345678"</p>
        <p>Email: "twitter@twitter.com"</p>
      </div>
    </div>
  )
}

export default App;