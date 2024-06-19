import './Nav1.css'
import { Nav,Navbar,Container ,Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav1 = ({search,setSearch,searchProduct}) => {
    return (
        <>
        <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><img src='/image/logo.webp' alt=''></img> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className=" input-group d-flex " >
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className=" input "
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch (e.target.value)}
                        />
                        <Button variant="outline-success" className='button--submit' onClick={searchProduct}><i className="fa-solid fa-magnifying-glass fs-3"></i></Button>
                    </Form>
                        
                        
                    </Nav>
                    <Link to="/login"><button className='btn btn-primary mx-2' ><i className="fa-solid fa-right-to-bracket"></i> Log In</button></Link>
                    <Link to="/register"><button className='btn btn-primary mx-2'> Register</button></Link>   
                        <button className='btn btn-primary' ><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</button> 
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
        </>
    )
}

export default Nav1
