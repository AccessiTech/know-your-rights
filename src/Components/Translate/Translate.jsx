import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./translate.scss";
import PropTypes from "prop-types";

function Translate({ hideCredit } = {}) {
  useEffect(() => {
    if (document.getElementById("google_translate_element") && !window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  });
  return (
    <Row>
      <Col style={{ textAlign: "center" }}>
        <div
          id="google_translate_element"
          className={hideCredit ? "hide-credit" : ""}
        ></div>
      </Col>
    </Row>
  );
}

Translate.propTypes = {
  hideCredit: PropTypes.bool,
};

export default Translate;
