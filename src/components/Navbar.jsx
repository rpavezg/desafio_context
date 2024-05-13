import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegador = () => {
  return (
<Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-white" to="/">Home</Link>   |   <Link className="text-white" to="/favoritos">Favoritos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  );
};
export default Navegador;
