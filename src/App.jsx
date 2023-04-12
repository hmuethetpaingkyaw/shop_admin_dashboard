import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "reactstrap";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row className="d-flex">
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
