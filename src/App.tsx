import React, { createContext, useState } from "react";
import telegramLogo from "./images/Telegram_logo.png";
import instagramLogo from "./images/Instagram_logo_2022.png";
import logo from "./images/autogallery-logo.jpg";
import Header from "./components/Header/Header";
import Vehicle_item from "./components/Main/Vehicle-item";
import Footer from "./components/Footer/Footer";
import vehicleFrontImage1111 from "./images/pride 1383 1111/front-image.jpg";
import vehicleBackImage1111 from "./images/pride 1383 1111/back-image.jpg";
import vehicleRightImage1111 from "./images/pride 1383 1111/right-image.jpg";
import vehicleLeftImage1111 from "./images/pride 1383 1111/left-image.jpg";
import vehicleFrontImage1112 from "./images/pride 1395 1112/front-image.jpg";
import vehicleBackImage1112 from "./images/pride 1395 1112/back-image.jpg";
import vehicleRightImage1112 from "./images/pride 1395 1112/right-image.jpg";
import vehicleLeftImage1112 from "./images/pride 1395 1112/left-image.jpg";
import vehicleFrontImage1113 from "./images/motsubishi 1977 1113/front-image.jpg";
import vehicleBackImage1113 from "./images/motsubishi 1977 1113/back-image.jpg";
import vehicleRightImage1113 from "./images/motsubishi 1977 1113/right-image.jpg";
import vehicleLeftImage1113 from "./images/motsubishi 1977 1113/left-image.jpg";
import vehicleFrontImage1114 from "./images/peugeot 206 1381 1114/front-image.jpg";
import vehicleBackImage1114 from "./images/peugeot 206 1381 1114/back-image.jpg";
import vehicleRightImage1114 from "./images/peugeot 206 1381 1114/right-image.jpg";
import vehicleLeftImage1114 from "./images/peugeot 206 1381 1114/left-image.jpg";
import lightModeImage from "./images/Light mode.png";
import darkModeImage from "./images/Dark mode.png";
import "./App.css";

export const ThemeModeContext = createContext("dark");

function App() {
  const [toggleTheme, setToggleTheme] = useState("light");
  const themeMode = () => {
    setToggleTheme(toggleTheme === "light" ? "dark" : "light");
    console.log(toggleTheme);
  };

  return (
    <ThemeModeContext.Provider value={toggleTheme}>
      <body className={"body-" + toggleTheme}>
        <Header
          autoGalleryLogo={logo}
          autoGalleryName={"Roham"}
          autoGalleryPhoneNumber={"+989123456789"}
          instagramLogo={instagramLogo}
          telegramLogo={telegramLogo}
          instagramId={"Empty"}
          telegramId={"Empty"}
        />
        <div
          className={"theme-button-background-" + toggleTheme}
          onClick={themeMode}
        >
          {toggleTheme === "dark" && (
            <img
              className="theme-mode-image"
              src={darkModeImage}
              alt="Dark Mode"
            />
          )}
          {toggleTheme === "light" && (
            <img
              className="theme-mode-image"
              src={lightModeImage}
              alt="Light Mode"
            />
          )}
        </div>
        <main>
          <Vehicle_item
            vehicleFrontImage={vehicleFrontImage1111}
            vehicleBackImage={vehicleBackImage1111}
            vehicleRightImage={vehicleRightImage1111}
            vehicleLeftImage={vehicleLeftImage1111}
            vehicleName={"پراید ۱۳۱"}
            vehicleColor={"نوک مدادی"}
            vehicleModel={"۱۳۸۳"}
            vehicleKilometr={"۳۱۸٫۰۰۰"}
            vehicleberand={"پراید"}
            vehicleGearBox={"دستی"}
            vehicleFuelType={"بنزینی"}
            vehicleEngine={"سالم"}
            vehicleFrontChassis={"سالم و پلمپ"}
            vehicleBackChassis={"ضربه خورده"}
            vehicleBody={"خط وخش جزیی"}
            vehicleInsurance={"۹ ماه "}
            vehiclePrice={"۱۲۲٫۰۰۰٫۰۰۰"}
          />
          <Vehicle_item
            vehicleFrontImage={vehicleFrontImage1112}
            vehicleBackImage={vehicleBackImage1112}
            vehicleRightImage={vehicleRightImage1112}
            vehicleLeftImage={vehicleLeftImage1112}
            vehicleName={"پراید ۱۳۱ SE"}
            vehicleColor={"سفید"}
            vehicleModel={"۱۳۹۵"}
            vehicleKilometr={"۱۱۸٫۰۰۰"}
            vehicleberand={"پراید"}
            vehicleGearBox={"دستی"}
            vehicleFuelType={"بنزینی"}
            vehicleEngine={"سالم"}
            vehicleFrontChassis={"سالم و پلمپ"}
            vehicleBackChassis={"سالم و پلمپ"}
            vehicleBody={"سالم"}
            vehicleInsurance={"۹ ماه "}
            vehiclePrice={"۲۶۰٫۰۰۰٫۰۰۰"}
          />
          <Vehicle_item
            vehicleFrontImage={vehicleFrontImage1113}
            vehicleBackImage={vehicleBackImage1113}
            vehicleRightImage={vehicleRightImage1113}
            vehicleLeftImage={vehicleLeftImage1113}
            vehicleName={"میتسوبیشی گالانت"}
            vehicleColor={"مسی"}
            vehicleModel={"۱۹۷۷"}
            vehicleKilometr={"۶۱۳٫۰۰۰"}
            vehicleberand={"میتسوبیشی"}
            vehicleGearBox={"دستی"}
            vehicleFuelType={"بنزینی"}
            vehicleEngine={"سالم"}
            vehicleFrontChassis={"سالم و پلمپ"}
            vehicleBackChassis={"ضربه خورده"}
            vehicleBody={"نیاز به رنگ"}
            vehicleInsurance={"۱۰ ماه "}
            vehiclePrice={"۱۱۰٫۰۰۰٫۰۰۰"}
          />
          <Vehicle_item
            vehicleFrontImage={vehicleFrontImage1114}
            vehicleBackImage={vehicleBackImage1114}
            vehicleRightImage={vehicleRightImage1114}
            vehicleLeftImage={vehicleLeftImage1114}
            vehicleName={"پژو ۲۰۶ تیپ ۲"}
            vehicleColor={"آبی"}
            vehicleModel={"۱۳۸۱"}
            vehicleKilometr={"۴۰۰٫۰۰۰"}
            vehicleberand={"پژو ۲۰۶"}
            vehicleGearBox={"دستی"}
            vehicleFuelType={"بنزینی"}
            vehicleEngine={"سالم"}
            vehicleFrontChassis={"سالم و پلمپ"}
            vehicleBackChassis={"سالم و پلمپ"}
            vehicleBody={"خط وخش جزیی"}
            vehicleInsurance={"۱۰ ماه "}
            vehiclePrice={"۱۹۰٫۰۰۰٫۰۰۰"}
          />
        </main>
        <Footer
          autoGalleryLogo={logo}
          instagramLogo={instagramLogo}
          telegramLogo={telegramLogo}
          instagramId={"Empty"}
          telegramId={"Empty"}
          autoGalleryName={"Roham"}
          autoGalleryPhoneNumber={"+989123456789"}
        />
      </body>
    </ThemeModeContext.Provider>
  );
}

export default App;
