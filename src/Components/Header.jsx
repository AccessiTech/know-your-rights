import { Col, Row } from "react-bootstrap";
import Translate from "../Components/Translate";

function Header() {
  return (
    <header>
      <Row>
        <Col>
          <h1>Know Your Rights</h1>
          <Translate />
          {/* <p className="lead">
              If you are reading this, you have constitutional rights.
            </p> */}
        </Col>
      </Row>
    </header>
  );
}

export default Header;
