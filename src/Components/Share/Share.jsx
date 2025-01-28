import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

function Share({ siteUrl, linkText, shareTitle, shareText }) {
  const url = siteUrl || "https://redcards.accessi.tech";
  const text = linkText || url.slice(8);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const shareHandler = (e) => {
    e.preventDefault();

    if (!isMobile) {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
      return;
    }

    navigator
      .share({
        title: shareTitle || document.title,
        text: shareText || "Know Your Rights",
        url,
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
            <p>Click to {isMobile ? "Share" : "Copy"}</p>
            <img
              style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
              src="/assets/qr.svg"
              alt="QR code to this website"
            />
            <p>{text}</p>
          </a>
        </Col>
      </Row>
    </section>
  );
}

Share.propTypes = {
  siteUrl: PropTypes.string,
  linkText: PropTypes.string,
  shareTitle: PropTypes.string,
  shareText: PropTypes.string,
};

export default Share;
