import Header from "../Components/Header";
import Wrapper from "../Components/Wrapper";
import { Container, Row, Col } from "../Components/Grid";

function SingleLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <Wrapper>
        <Container fluid>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>{children}</Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}

export default SingleLayout;
