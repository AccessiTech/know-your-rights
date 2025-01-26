import { Row, Col } from "react-bootstrap";

function Share() {
  const shareHandler = (e) => {
    e.preventDefault();

    navigator
      .share({
        title: "Red Cards",
        text: "Know Your Rights",
        url: "https://redcards.accessi.tech",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  };

  return (
    <section id="share">
      <Row>
        <Col
          xs={{ span: 8, offset: 2 }}
          sm={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 4 }}
          lg={{ span: 2, offset: 5 }}
        >
          <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
            className="qr-link"
            style={{ textAlign: "center" }}
            onClick={shareHandler}
          >
            <img
              style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
              src="/assets/qr.svg"
              alt="QR code to this website"
            />
            <p>redcards.accessi.tech</p>
          </a>
        </Col>
      </Row>
    </section>
  );
}

export default Share;
