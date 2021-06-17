import iconFreeShipping from "../../assets/icon-shipping@2x.png";
import "./styles.scss";
import { setClassName } from "../../utils/setClassName";

const FreeShippingTag = ({ isFree, className }) => {
  return isFree ? (
    <div className={setClassName(["free-shipping-tag", className])}>
      <img
        className="free-shipping-tag__img"
        src={iconFreeShipping}
        alt="Free Shipping"
      />
    </div>
  ) : null;
};

export default FreeShippingTag;
