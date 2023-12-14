import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/ashish-babu-rao-020b021b9/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dlhke10we/image/upload/v1701951129/background_fggysn.jpg"
              alt="Founder"
            />
            <Typography>Ashish Babu Rao</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is a ShopPlusPlus Ecommerce wesbite made by @meashishrao.
             
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/ashish-babu-rao-020b021b9/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
