import { Col, Container, Row } from "react-bootstrap";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <main>
      <Container fluid className="portfolio-page">
        <Row className="align-items-center g-4">
          <Hero />
        </Row>
        <Row className="justify-content-between align-items-start g-3">
          <Col xs={12} lg={6} className="ms-0">
            <TechStack />
          </Col>
          <Col xs={12} lg={6} className="ms-0">
            <About />
          </Col>
        </Row>
        <Row>{/* <Projects /> */}</Row>
      </Container>
    </main>
  );
}

export default App;
