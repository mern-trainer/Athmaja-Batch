import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"

export const Header = () => {
    return <Navbar expand="md" bg="light" className="navbar-light">
        <Container fluid>
            <Navbar.Brand>
                <Image src="./logo.png" alt="website logo" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="active">Home</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}