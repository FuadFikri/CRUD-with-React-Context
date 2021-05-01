import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavbarBrand, NavItem } from 'reactstrap'


export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container >
              <NavbarBrand href="/"> My Team</NavbarBrand>
              <Nav>
                <NavItem>
                    <Link className="btn btn-primary"> Add User</Link>
                </NavItem>
              </Nav>
            </Container>

        </Navbar>
    )
}
