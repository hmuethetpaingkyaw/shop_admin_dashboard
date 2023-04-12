import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import './index.css';
import Profile from "../../assets/imgs/profile.png";

export default function CustomNavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex mt-3 justify-content-end">
      <img src={Profile} width="50" height="50" alt="Logo" />
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="custom-toggle" >
            <span>Mg Mg</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
