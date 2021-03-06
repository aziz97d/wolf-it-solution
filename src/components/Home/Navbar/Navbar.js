import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/WOLF SOLUTION BG WHITE.png'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img style={{ width: '100px' }} src={logo} alt="" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/">
                        Home
                    </Link>
                        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link">
                            About Us
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link">
                            Projects
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    {
                        loggedInUser.email && <li class="nav-item">
                        <Link class="nav-link" to="/admin">
                            Admin
                        </Link>
                        </li>
                        
                    }
                    {
                        loggedInUser.email && <li class="nav-item">
                        <Link class="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                        </li>
                    }
                    
                    
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;