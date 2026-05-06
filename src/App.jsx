import { Col, Container, Row } from "react-bootstrap";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main>
      <Container>
        <Row className="align-items-center g-4">
          <Hero />
        </Row>
        <Row className="justify-content-between align-items-start g-3">
          <Col xs={12} lg={6} className="ms-0">
            {/* <Projects /> */}
          </Col>
          <Col xs={12} lg={6} className="ms-0">
            {/* <About /> */}
          </Col>
        </Row>
        <Row>{/* <TechStack /> */}</Row>
      </Container>
    </main>
  );
}

export default App;
