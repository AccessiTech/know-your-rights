import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Translate.scss";

function Translate() {
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
      <Col style={{ textAlign: "center", colorScheme: 'firebrick' }}>
        <div id="google_translate_element"></div>
      </Col>
    </Row>
  );
}

export default Translate;
