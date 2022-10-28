import React from "react";
import cl from "./styles/Header.module.css";
import discordIcon from "./icons/discordGrey.png";
import telegramIcon from "./icons/telegramGrey.png";
import twitterIcon from "./icons/twitterGrey.png";
import instagramIcon from "./icons/instagramInColour.png";
import MagentaButton from "./buttons/MagentaButton";

const Header = () => {
  return (
    <header>
      <div className={cl.logoPlace}>ddd</div>
      <div className={cl.socialMediaLinks}>
        <img src={telegramIcon} alt="telegramIcon" />
        <img src={discordIcon} alt="discordIcon" />
        <img src={twitterIcon} alt="twitterIcon" />
        <img src={instagramIcon} alt="instagramIcon" />
        <MagentaButton>Go to Open Sea</MagentaButton>
      </div>
    </header>
  );
};

export default Header;
