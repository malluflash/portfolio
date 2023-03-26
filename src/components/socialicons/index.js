import React from "react";
import "./style.css";
import {
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";

export const Socialicons = (params) => {
  return (
        <div className="stick_follow_icon ">
          <ul>
            <li>
            <a href="https://twitter.com/freakygo0ogler">
              <Twitter />
            </a>
            </li><li>
            <a href="https://www.linkedin.com/in/harikrishnankavungal">
              <LinkedIn />
            </a>
            </li><li>
            <a href="https://www.facebook.com/freakygooogler">
              <Facebook />
            </a>
            </li><li>
            <a href="https://gitdub.com/malluflash">
              <GitHub />
            </a>
          </li><li>
            <a href="https://www.instagram.com/freakygooogler">
              <Instagram />
            </a>
            </li>
            </ul>
          <p>Follow me</p>
       </div>
  );
};
