import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./index.css";
// import Profile from "../../assets/imgs/profile.png";
import { BsMoon, BsCloudSun } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions";

export default function CustomNavBar() {
  const context = useContext(ThemeContext);
  const dispatch = useDispatch()

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleTheme = (theme) => {
    context.setTheme(theme);
  };

  const {user} = useSelector((state)=> state.user)
  
  useEffect(()=> {
    const user = localStorage.getItem('shop_user');
    dispatch(login(JSON.parse(user)))
  },[])

  return (
    <div className="d-flex mt-3 justify-content-end">
      <div className="d-flex gap-4 mx-5">
        {context.theme === "light" ? (
          <BsMoon size={25} onClick={() => handleTheme("dark")} />
        ) : (
          <BsCloudSun size={25} onClick={() => handleTheme("light")} style={{
            color: 'white'
          }} />
        )}
      </div>
      {/* <img src={Profile} width="50" height="50" alt="Logo" /> */}
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="custom-toggle">
          <span className={context.theme === 'light' ? '' : 'text-white'}>{user?.name}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

