import React from "react";
import "./index.css";
import ContactCard from "./ContactCard";


function App() {

  return(
    <div className="contacts">
      <ContactCard 
        imgurl="{require('./images/bible.jpg')}" alt="Bible" 
        name="The Bible"
        phone="07012345678"
        email="bible@bible.com"
      />
      <ContactCard 
        imgurl="{require('./images/at-icon.jpg')}" alt="Bible" 
        name="Email Logo"
        phone="08012345678"
        email="email@email.com"
      />
      <ContactCard 
        imgurl="{require('./images/facebook-icon.png')}" alt="Facebook"
        name="Facebook Logo"
        phone="08112345678"
        email="facebook@facebook.com"
      />
      <ContactCard 
        imgurl="{require('./images/twitter-icon.png')}" alt="Twitter"
        name="Twitter logo"
        phone="09012345678"
        email="twitter@twitter.com"
      />
    </div>
  )
}

export default App;