import React from "react";
import "./index.css";
import ContactCard from "./ContactCard";


function App() {

  return(
    <div className="contacts">
      <ContactCard contact={{imgurl: "{require('./images/bible.jpg')}", alt: "Bible" , name: "The Bible", phone: "07012345678", email: "bible@bible.com"}} />
      <ContactCard contact={{imgurl: "{require('./images/at-icon.jpg')}", alt: "Email", name: "Email Logo", phone: "08012345678", email: "email@email.com"}} />
      <ContactCard contact={{imgurl: "{require('./images/facebook-icon.png')}", alt: "Facebook", name: "Facebook logo", phone: "08112345678", email: "facebook@facebook.com"}} />
      <ContactCard contact={{imgurl: "{require('./images/twitter-icon.png')}", alt: "Twitter", name: "Twitter Logo", phone: "0901234567", email: "twitter@twitter.com"}} />
    </div>
  )
}

export default App;