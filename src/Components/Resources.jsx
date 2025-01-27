import { useState } from "react";
import { Button, Col, Dropdown, Modal, Row } from "react-bootstrap";
import { titleCase } from "../utils";
import { digitalResources, redCardsPrintLinks } from "./content";


function Resources() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <section id="resources">
      <Row>
        <Col>
          <h2 id="digital-resources">Digital Resources</h2>
          <Row style={{
            marginBottom: "4rem",
            justifyContent: "center",
          }}>
            {/* buttons for digital resources */}
            {Object.entries(digitalResources).map(([source, data]) => (
              <Col key={source} sm={12} md={6}>
                <Button
                  variant="primary"
                  size="lg"
                  className="text-secondary"
                  href={data.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", marginBottom: "1rem", fontWeight: "bold" }}
                  onClick={(e) => {
                    if (data.links) {
                      e.preventDefault();
                      setModalContent({
                        ...data,
                        sourceName: source,
                      });
                      setShowModal(true);
                    }
                  }}
                >
                  {data.title}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 id="printable-resources">Printable Resources</h2>
          {/* buttons for redcards, the flyer, and the qr code svg */}
          <Row>
            <Col sm={12} md={4}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  size="lg"
                  className="dropdown-link"
                >
                  Red Cards
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.entries(redCardsPrintLinks).map(
                    ([language, link]) => (
                      <Dropdown.Item
                        key={language}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {titleCase(language.replace(/_/g, " "))}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={12} md={4}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  size="lg"
                  className="dropdown-link"
                >
                  Flyer
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="/assets/Flyer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Black and White
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/assets/Flyer_blank.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blank
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm={12} md={4}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  size="lg"
                  className="dropdown-link"
                >
                  QR Code
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="/assets/qr.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Black
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/assets/qr_black.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    White
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/assets/qr_red.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Red
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{modalContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent?.description}</p>
          {modalContent?.links?.map((link) => (
            <article key={link.title} className="modal-item">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <Button
                variant="primary-outline"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Go to {link.title}
              </Button>
            </article>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <a
            href={modalContent?.source}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center", display: "block", width: "100%" }}
          >
            {modalContent?.sourceName}
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Resources;
