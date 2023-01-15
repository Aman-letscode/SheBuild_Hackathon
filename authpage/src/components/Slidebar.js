import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import './Slidebar.css'

function Slidebar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="sidebar">
        <div className="sidebar-div">
          <div onClick={() => collapseSidebar()}>
            <i className="ri-menu-line">
              <span>Menu</span>
            </i>
          </div>
        </div>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Slidebar;
