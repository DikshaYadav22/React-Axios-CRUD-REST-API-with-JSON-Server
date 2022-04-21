import React, { memo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Nav,
  NavbarText,
  NavLink,
  Collapse,
} from "reactstrap";

const Menu = memo(() => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">PaintSkyCoder</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contacts</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/add/contacts">Add Contacts</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
});

export default Menu;
