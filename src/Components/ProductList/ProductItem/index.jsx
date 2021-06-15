import { Container, Row, Col } from "../../Grid";
import "./styles.scss";

function ProductItem({ product }) {
  const { id, title, thumbnail, free_shipping, price, location } = product;
  return (
    <div className="product-item" id={id}>
      <Container>
        <Row>
          <Col md={{ span: 2 }}>
            <img src={thumbnail} alt={title} />
          </Col>
          <Col md={{ span: 8 }}>
            {price}
            <h3>{title}</h3>
          </Col>
          <Col md={{ span: 2 }}>
            {location}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductItem;
