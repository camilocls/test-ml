import iconFreeShipping from "../../assets/icon-shipping@2x.png";
import "./styles.scss";

const setClassName = (className) => {
  return className.filter(className => (className)).join(" ")
}

const FreeShippingTag = ({ isFree, className }) => {
  return (
    isFree ? (
      <span className={setClassName(["free-shipping", className])}>
        <img
          className="free-shipping__img"
          src={iconFreeShipping}
          alt="Free Shipping"
        />
      </span>
    ): null
  );
};

export default FreeShippingTag;
