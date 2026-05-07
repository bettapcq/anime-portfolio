import { Col, Container, Row } from "react-bootstrap";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Collabs from "./components/Collabs/Collabs";
import BeyondCode from "./components/BeyondCode/BeyondCode";
import ImageSection from "./components/BeyondCode/ImageSection";

function App() {
  return (
    <main>
      <Container fluid className="portfolio-page">
        <Row className="align-items-center g-4">
          <Hero />
        </Row>
        <Row className="justify-content-between g-3">
          <Col xs={12} lg={7} className="ms-0">
            <TechStack />
          </Col>
          <Col xs={12} lg={5} className="ms-0">
            <About />
          </Col>
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Collabs />
        </Row>
        <Row>
          <Col xs={12} md={5} className="order-2 order-md-1">
            <ImageSection />
          </Col>{" "}
          <Col xs={12} md={7} className="order-1 order-md-2">
            <BeyondCode />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
