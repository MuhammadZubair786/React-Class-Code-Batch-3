import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavbarComp() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">
                            <Link to={"/"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <Link to={"/about"}>About</Link>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <Link to={"/contact"}>Contact</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

        </>
    )
}

export default NavbarComp