import { useContext } from "react";
import { ThemeModeContext } from "../../App";
import "./style.css";
function Footer(attrs: {
  autoGalleryLogo: any;
  autoGalleryName: string;
  autoGalleryPhoneNumber: string;
  instagramLogo: any;
  telegramLogo: any;
  instagramId: string;
  telegramId: string;
}) {
  const themeMode = useContext(ThemeModeContext);

  return (
    <footer className={"footer-" + themeMode}>
      <img
        className="footer-logo-image"
        src={attrs.autoGalleryLogo}
        alt="Roham Autogallery"
      />
      <h3 className="footer-auto-gallery-name">
        {attrs.autoGalleryName} Automobile gallery
      </h3>
      <p className="footer-auto-gallery-phone-number">
        Phone number : {attrs.autoGalleryPhoneNumber}
      </p>
      <div className="footer-instagram-box">
        <img
          className="footer-instagram-logo"
          src={attrs.instagramLogo}
          alt="Instagram"
        />
        <a
          className={"footer-instagram-link-" + themeMode}
          href={"https://imstagram.com/" + attrs.instagramId}
        >
          Instagram
        </a>
      </div>
      <div className="footer-telegram-box">
        <img
          className="footer-telegram-logo"
          src={attrs.telegramLogo}
          alt="Telegram"
        />
        <a
          className={"footer-telegram-link-" + themeMode}
          href={"https://t.me/" + attrs.telegramId}
        >
          Telegram
        </a>
      </div>
    </footer>
  );
}
export default Footer;
