import { Container, Row, Col } from "../../Components/Grid";
import logo from "../../assets/logo.png";
import Search from "../Search";
import Wrapper from "../../Components/Wrapper";
import "./styles.scss";

function Header() {
  return (
    <div className="header">
      <Wrapper className="header__content">
        <Container fluid>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <a href="/">
                <img className="header__logo" src={logo} alt="Logo MELI" />
              </a>
            </Col>
            <Col md={9}>
              <div className="header__search">
                <Search />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Header;
