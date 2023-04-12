import { useState } from "react";
import { Row } from "reactstrap";
import CustomModal from "../components/Modal";
import CustomTable from "../components/Table/Table";

function Order() {
  const [open, setOpen] = useState(false);
  return (
    <Row>
      <CustomTable setOpen={setOpen} />
      <CustomModal isOpen={open} onClick={() => setOpen(false)}>
        Hello World
      </CustomModal>
    </Row>
  );
}
export default Order;
