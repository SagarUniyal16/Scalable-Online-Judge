/* eslint-disable react/jsx-no-undef */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return (
       <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#online_judge">Online Judge</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#problems">Problems</Nav.Link>
            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </div>
    )
}