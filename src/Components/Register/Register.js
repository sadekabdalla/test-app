
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
    return (
        <div>
            <section className="bg-light register">
                <div className="container">
                    <h3 className='text-center text-primary'>Register</h3>
                    <div className="row justify-content-center">
                    <div className="">
                        <div className="card border ">
                        <div className="card-body">
                            
                            <h2 className=" text-center text-secondary ">Enter your details to register</h2>
                            <form action="#!">
                            <div className="row gy-2 overflow-hidden">
                                <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" required/>
                                    <label for="firstName" className="form-label">First Name</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required/>
                                    <label for="lastName" className="form-label">Last Name</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
                                    <label for="email" className="form-label">Email</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" name="password" id="password" value="" placeholder="Password" required/>
                                    <label for="password" className="form-label">Password</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                                    <label className="form-check-label text-secondary" for="iAgree">
                                    I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                                    </label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="d-grid my-3">
                                    <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                                </div>
                                </div>
                                <div className="col-12">
                                <p className="m-0 text-secondary text-center">Already have an account? <Link to='/login'><a href="#!" className="link-primary text-decoration-none">Sign in</a></Link> </p>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
