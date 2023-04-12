import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "reactstrap";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Container
        className="p-0"
       
      >
        <Row className="d-flex justify-content-around">
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <Home />
          </Col>
        </Row>

          {/* <Login/> */}
      </Container>
    </div>
  );
}

export default App;
