import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function Login() {
  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Col md={6}>
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#ffaabb",
            }}
          >
            <h5>Coca cola Dashboard</h5>
          </CardHeader>
          <CardBody className="p-5">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="password"
                />
              </FormGroup>

              <FormGroup check>
                <Input type="checkbox" /> <Label check>Show Password</Label>
              </FormGroup>
              <Button color="danger" className="mt-3">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
