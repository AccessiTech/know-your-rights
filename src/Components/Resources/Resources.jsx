import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import ResourceBtn from "./ResourceBtn";
import { titleCase } from "../../utils";
import {
  digitalResources,
  printableResources,
} from "./content";



function Resources() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <section id="resources">
      <Row>
        <Col>
          <h2 id="digital-resources">Digital Resources</h2>
          <Row
            style={{
              marginBottom: "3rem",
              justifyContent: "center",
            }}
          >
            {/* buttons for digital resources */}
            {Object.entries(digitalResources).map(([source, data]) => (
              <Col key={source} sm={12} md={6}>
                <ResourceBtn
                  data={data}
                  source={source}
                  setShowModal={setShowModal}
                  setModalContent={setModalContent}
                />
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
            {Object.entries(printableResources).map(([source, data]) => (
              <Col key={source} sm={12} md={4}>
                <ResourceBtn
                  data={data}
                  source={source}
                  setShowModal={setShowModal}
                  setModalContent={setModalContent}
                />
              </Col>
            ))}
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
            <div key={link.title} className="modal-item">
              {link.description ? <h3>{link.title}</h3> : null}
              <p>{link.description}</p>
              <Button
                variant="primary-outline"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                {titleCase(link.title.replace(/_/g, " "))}
              </Button>
            </div>
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
