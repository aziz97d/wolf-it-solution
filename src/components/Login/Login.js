import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import loginSideImage from '../../images/loginPage-side-image.png'

const firebaseConfig = {
    apiKey: "AIzaSyBE4aUqvIrvgyKdKgjU4rfyhi2VNS1Vv_Q",
    authDomain: "wolf-solution.firebaseapp.com",
    projectId: "wolf-solution",
    storageBucket: "wolf-solution.appspot.com",
    messagingSenderId: "871921480032",
    appId: "1:871921480032:web:abac4b3a24a3b55c7d6e05"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        // isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    // isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                    // success: true
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                setUserToken();
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <div className="login-custom d-flex justify-content-center align-items-center">
            <div className="login-center row">
                <div className="login-left-side d-flex align-items-center col-md-6">
                    <img src={loginSideImage} className="w-100" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column text-center justify-content-center">

                    <form action="" className="login-form">
                        <h4 className="login-title">Login</h4>
                        <input type="text" placeholder="Email" />

                        <input type="password" placeholder="Password" />

                        <button className="btn-login">Login</button>


                        {/* <Link to="/">Home</Link> */}

                    </form>
                    <div className="social-login">
                        <button onClick={googleSignIn} className="btn-login">Google Sign In</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;