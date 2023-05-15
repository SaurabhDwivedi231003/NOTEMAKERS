import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <>
    <div class="social-container" >
      <h5 class="made">Made by  </h5>
      <h5 class="made"> SAURABH DWIVEDI</h5>
      
      <a href="https://instagram.com/mr_seenu__2310?igshid=NTdlMDg3MTY="
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/saurabh-dwivedi-ab701b234"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.youtube.com/@saurabh_dwivedi_23"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://github.com/Saurabhdwivedi231003"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.twitter.com/mr_seenu__2310" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
     </div>
</>
  );
}

