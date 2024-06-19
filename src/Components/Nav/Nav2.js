
import { Link } from "react-router-dom";
import './Nav2.css'
import { Col, Container, Row } from "react-bootstrap";

const Nav2 = () => {
    return (
        <Container fluid>
            <Row className="d-flex last-nav">
                <Col xs='2' s='2' lg='4' m='2'>
                <div className='user-profile'>
                    
                        
                       
                        
            </div>
                </Col>
                <Col  xs='10' s='10' lg='5' m='8'><div className='nav-link'>
                <ul style={{listStyle:"none"}}>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/shop' className='link'>Shop</Link></li>
                    <li><Link to='/cart' className='link'>Cart</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>
                </ul>
            </div>
                </Col>
                <Col  xs='' s='0' lg='3' m='2'>
                <div className='offer'>
                <p>flat 10% over all iphone</p>
            </div>
                </Col>
            </Row>
        </Container>
            
            
        
        
    )
}

export default Nav2
