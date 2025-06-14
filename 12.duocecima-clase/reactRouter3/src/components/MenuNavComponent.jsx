import Nav from 'react-bootstrap/Nav';
import "../css/MenuNavComponent.css"
function MenuNavComponent() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Crear Ruta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Informacion Ruta </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Contacto
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MenuNavComponent;
