import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="d-flex">
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col>
          Dashboard
            {/* <MainDash /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
