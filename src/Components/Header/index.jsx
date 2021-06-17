import logo from "../../assets/logo.png";
import Search from "../Search";
import Wrapper from "../../Components/Wrapper";
import "./styles.scss";

function Header() {
  return (
    <div className="header">
      <Wrapper className="header__content">
        <a className="header__link-logo" href="/">
          <img className="header__logo" src={logo} alt="Logo MELI" />
        </a>
        <div className="header__search">
          <Search />
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
