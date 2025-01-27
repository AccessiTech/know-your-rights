import { Col, Dropdown, Row } from "react-bootstrap";
import { titleCase } from "../utils";

const redCardsPrintLinks = {
  arabic:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-arabic.pdf",
  chinese:
    "https://www.ilrc.org/sites/default/files/resources/red_card-self_srv-chinese.pdf",
  english:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-english.pdf",
  farsi:
    "https://www.ilrc.org/sites/default/files/2024-12/Artwork%20for%20Printing%20Your%20Own%20Red%20Cards%20-%20Farsi.pdf",
  french:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-french-20190603.pdf",
  haitian_creole:
    "https://www.ilrc.org/sites/default/files/2023-06/Artwork%20for%20Printing%20Your%20Own%20Red%20Cards%20-%20Haitian%20Creole.pdf",
  hmong:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-hmong-20190917.pdf",
  korean:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-korean.pdf",
  pashto:
    "https://www.ilrc.org/sites/default/files/2024-12/Artwork%20for%20Printing%20Your%20Own%20Red%20Cards%20-%20Pashto.pdf",
  punjabi:
    "https://www.ilrc.org/sites/default/files/documents/artwork_for_printing_your_own_red_cards_-_punjabi.pdf",
  russian:
    "https://www.ilrc.org/sites/default/files/documents/artwork_for_printing_your_own_red_cards_-_russian.pdf",
  spanish:
    "https://www.ilrc.org/sites/default/files/2025-01/Artwork%20for%20Printing%20Your%20Own%20Red%20Cards%20-%20Spanish.pdf",
  tagalog:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-tagalog-20190603.pdf",
  tigrinya:
    "https://www.ilrc.org/sites/default/files/2024-12/Artwork%20for%20Printing%20Your%20Own%20Red%20Cards%20-%20Tigrinya.pdf",

  ukrainian:
    "https://www.ilrc.org/sites/default/files/documents/artwork_for_printing_your_own_red_cards_-_ukrainian.pdf",
  vietnamese:
    "https://www.ilrc.org/sites/default/files/documents/red_card-self_srv-vietnamese-20190603.pdf",
};

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
