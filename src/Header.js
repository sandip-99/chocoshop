import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const {cartitem}=useSelector((state)=>state.cart)
    return (
        <section class="navbar-area">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><img src="images/ivory_logo 1.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav>
                                <Nav.Link href="#action1">
                                    <Link to="/" class="nav-link ">
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/product" class="nav-link">
                                        Products
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/about" class="nav-link">
                                        About Us
                                    </Link>
                                </Nav.Link>

                            </Nav>
                    <div className='cart-button-box'>
                        <div class="button">
                            <Link to="/Cart"><i class="fa-solid fa-store"><sup>{cartitem.length}</sup></i></Link>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </section>
    );
}

