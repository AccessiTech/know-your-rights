import { Button, Col, Nav, Row, Tab, Tabs } from "react-bootstrap";


const rightColContent = (
  <>
    <p>
      I do not wish to speak with you, answer your questions, or sign or hand
      you any documents based on my 5th Amendment rights under the United States
      Constitution.
    </p>
    <p>
      I do not give you permission to enter my home based on my 4th Amendment
      rights under the United States Constitution unless you have a warrant to
      enter, signed by a judge or magistrate with my name on it that you slide
      under the door.
    </p>
    <p>
      I do not give you permission to search any of my belongings based on my
      4th Amendment rights.
    </p>
    <p>I choose to exercise my constitutional rights.</p>
  </>
);

const leftColContent = (
  <>
    <h2>You have constitutional rights</h2>
    <p>
      <b>DO NOT OPEN THE DOOR</b> if an immigration agent is knocking on the
      door.
    </p>
    <p>
      <b>DO NOT ANSWER ANY QUESTIONS</b> from an immigration agent if they try
      to talk to you. You have the right to remain silent.
    </p>
    <p>
      <b>DO NOT SIGN ANYTHING</b> without first speaking to a lawyer. You have
      the right to speak with a lawyer.
    </p>
    <p>
      If you are outside of your home, ask the agent if you are free to leave
      and if they say yes, leave calmly.
    </p>
    <p>
      <b>GIVE THIS CARD TO THE AGENT.</b> If you are inside of your home, show
      the card through the window or slide it under the door.
    </p>
  </>
);

function Rights() {
  return (
    <section id="rights">
      <Row>
        <Col md={6}>{leftColContent}</Col>
        <Col md={6}>
          <Tab.Container defaultActiveKey="translated" id="language-tabs">
            <Row>
              <Col>
                <h2>To the agent</h2>
              </Col>
              <Col style={{ width: "100%" }}>
                <Nav variant="pills" className="justify-content-end">
                  <Nav.Item>
                    <Nav.Link eventKey="translated">Translated</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="english">English</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="translated" title="Translated">
                    {rightColContent}
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="english"
                    title="English"
                    className="skiptranslate"
                  >
                    {rightColContent}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="credit">
            {`This is a digital version of the "Red Cards" created by `}
            <a
              href="https://www.ilrc.org/red-cards"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`the Immigration Legal Resource Center`}
            </a>
            {`.`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            href="https://www.informedimmigrant.com/resources/detention-deportation/know-your-rights/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="external-link"
          >
            More about YOUR RIGHTS
          </Button>
        </Col>
      </Row>
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

export default Rights;
