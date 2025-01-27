import { Col, Dropdown, Row } from "react-bootstrap";
import { titleCase } from "../utils";
import { digitalResources, redCardsPrintLinks } from "./content";


function Resources() {
  return (
    <section id="resources">
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
                  {Object.entries(redCardsPrintLinks).map(([language, link]) => (
                    <Dropdown.Item
                      key={language}  
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {titleCase(language.replace(/_/g, " "))}
                    </Dropdown.Item>
                  ))}
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
    </section>
  );
}

export default Resources;
