import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/shopping.png'
const Header: React.FC = () => {  
  const navigator = useNavigate()
  
  const onHomeIconClick = () => {
    navigator('/')
  }

  return ( 
    <Navbar expand="lg" className="bg-body-tertiary navbar position-fixed w-100 top-0 end-0">
      <Container>
        <img src={logo} alt="" onClick={onHomeIconClick} style={{width:'2rem', height:'2rem',cursor:'pointer',marginLeft:'1rem'}} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end">
            <div className="links d-lg-flex flex-direction-row">
              <p className='m-lg-3'><Link to={'/'}>Home</Link></p>
              <p className='m-lg-3'><Link to={'/Store'}>Store</Link></p>
              <p className='m-lg-3'><Link to={'/Cart'}>Cart</Link></p>
              <p className='m-lg-3'><Link to={'/Contact'}>Contact us</Link></p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;