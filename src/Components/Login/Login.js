import axios from 'axios'
import './Login.css'

import { Link } from "react-router-dom";
const Login = () => {
    
    return (
        <div>
            
            <form className='login'>
                <h3 className='text-center text-primary m-3 '>Log In</h3>
                <div data-mdb-input-init class="form-outline mb-4">
                    <input type="text" id="username" class="form-control"/>
                    <label class="form-label" for="username">username</label>
                </div>
                <div  class="form-outline mb-4">
                    <input type="password" id="password" class="form-control" />
                    <label class="form-label" for="password">Password</label>
                </div>
                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>
                    <div class="col">
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">Sign in</button>
                <div class="text-center">
                    <p>Not a member? <Link to='/register'><a href="#!">Register</a></Link> </p>
                    <p>or sign up with:</p>
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                    </button>
                </div>
                </form>
                        
        </div>
    )
}

export default Login
