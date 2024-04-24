import { useContext } from "react";
import { ThemeModeContext } from "../../App";
import "./style.css";
function Vehicle_item(attrs: {
  vehicleFrontImage: any;
  vehicleBackImage: any;
  vehicleRightImage: any;
  vehicleLeftImage: any;
  vehicleName: string;
  vehicleColor: string;
  vehicleModel: string;
  vehicleKilometr: string;
  vehicleberand: string;
  vehicleGearBox: string;
  vehicleFuelType: string;
  vehicleEngine: string;
  vehicleFrontChassis: string;
  vehicleBackChassis: string;
  vehicleBody: string;
  vehicleInsurance: string;
  vehiclePrice: string;
}) {
  const themeMode = useContext(ThemeModeContext);

  return (
    <article className={"vehicle-item-" + themeMode}>
      <div className="vehicle-image-box">
        <img
          className="vehicle-image"
          src={attrs.vehicleFrontImage}
          alt="Vehicle front image"
        />
        <img
          className="vehicle-image"
          src={attrs.vehicleBackImage}
          alt="Vehicle back image"
        />
        <img
          className="vehicle-image"
          src={attrs.vehicleRightImage}
          alt="Vehicle right image"
        />
        <img
          className="vehicle-image"
          src={attrs.vehicleLeftImage}
          alt="Vehicle left image"
        />
      </div>
      <h3 className={"vehicle-name-" + themeMode}>{attrs.vehicleName}</h3>
      <div className={"vehicle-item-description-" + themeMode}>
        <span className={"vehicle-item-option-" + themeMode}>
          رنگ : {attrs.vehicleColor}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          مدل : {attrs.vehicleModel}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          کارکرد : {attrs.vehicleKilometr}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          برند : {attrs.vehicleberand}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          گریبکس : {attrs.vehicleGearBox}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          نوع سوخت : {attrs.vehicleFuelType}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          موتور : {attrs.vehicleEngine}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          شاسی جلو : {attrs.vehicleFrontChassis}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          شاسی عقب : {attrs.vehicleBackChassis}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          بدنه : {attrs.vehicleBody}
        </span>
        <span className={"vehicle-item-option-" + themeMode}>
          بیمه : {attrs.vehicleInsurance}
        </span>
      </div>
      <span className="vehicle-price">بها : {attrs.vehiclePrice}</span>
    </article>
  );
}
export default Vehicle_item;
