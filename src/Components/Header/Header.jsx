import { Col, Row } from "react-bootstrap";
import Translate from "../Translate/Translate";
import PropTypes from "prop-types";

function Header({ title, lead, disableTranslate }) {
  return (
    <header>
      <Row>
        <Col>
          <h1>{title || "Know Your Rights"}</h1>
          {!disableTranslate && <Translate />}
          {lead && <p className="lead">{lead}</p>}
        </Col>
      </Row>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  disableTranslate: PropTypes.bool,
};

export default Header;
