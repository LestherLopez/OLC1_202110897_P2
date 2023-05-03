import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
       
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Crear Archivos</Nav.Link>
            <Nav.Link href="#features">Abrir Archivos</Nav.Link>
            <Nav.Link href="#pricing">Guardar Archivo</Nav.Link>
            <Nav.Link href="#features">Eliminar Pestaña</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;

//aqui se agregan componentes desde la pagina bootstrap-react