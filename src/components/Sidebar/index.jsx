// import React, { useState } from "react";
// import "./index.css";
//  import Logo from "../../imgs/logo.png";
//  import { SidebarData } from "../../Data/Data";
// import {AiOutlineCloseCircle} from "react-icons/ai";

// const Sidebar = () => {
//   const [selected, setSelected] = useState(0);

//   const [expanded, setExpaned] = useState(true);

//   const sidebarVariants = {
//     true: {
//       left: "0",
//     },
//     false: {
//       left: "-60%",
//     },
//   };

//   return (
//     <>
//       <div
//         className="bars"
//         style={expanded ? { left: "60%" } : { left: "5%" }}
//         onClick={() => setExpaned(!expanded)}
//       >
//        <AiOutlineCloseCircle size={32}/>
//       </div>
//       <div
//         className="sidebar"
//         variants={sidebarVariants}
//         animate={window.innerWidth <= 768 ? `${expanded}` : ""}
//       >
//         {/* logo */}
//         <div className="logo">
//           <img src={Logo} alt="logo" />
//           <span>
//             Cola
//           </span>
//         </div>

//         <div className="menu">
//           {SidebarData.map((item, index) => {
//             return (
//               <div
//                 className={selected === index ? "menuItem active" : "menuItem"}
//                 key={index}
//                 onClick={() => setSelected(index)}
//               >
//                 {/* <item.icon /> */}
//                 <span>{item.heading}</span>
//               </div>
//             );
//           })}
//           {/* signoutIcon */}
//           <div className="menuItem">{/* <UilSignOutAlt /> */}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./index.css";
import { SidebarData } from "../../Data/Data";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex flex-column gap-3 mt-5" navbar>
            {SidebarData.map((item, index) => {
              return (
                <NavItem
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <NavLink href="#">{item.icon}{item.heading}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
