import React, { useContext, useState } from 'react';
import './Login.css'
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }



    const authToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }


    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
    const verifyEmail = () => {
        const user = firebase.auth().currentUser;

        user.sendEmailVerification()
        .then( (res)=> {
            console.log(res)
        }).catch(function (error) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo.error = error
            setLoggedInUser(newUserInfo)
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (e.target.name === 'displayName') {
            isFieldValid = (e.target.value)
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
        if (isFieldValid === false) {
            let inValid = { ...loggedInUser };
            inValid = {
                displayName: '',
                email: '',
                password: '',
            }
            setLoggedInUser(inValid);
        }
    }

    const handleChangeSignUp = () => {
        setNewUser(!newUser);
    }

    const handleSubmit = (e) => {
        if (newUser && loggedInUser.email && loggedInUser.password && loggedInUser.displayName) {
            firebase.auth()
                .createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    const { displayName, email, uid } = res.user;
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ""
                    newUserInfo.isSignIn = true
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo)
                    updateUserName(loggedInUser.displayName)
                    console.log(res)
                    verifyEmail()
                    authToken()

                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo)
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });

               

        }
        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ""
                    loggedInUser.isSignedIn = true
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo)
                    console.log(res)
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo)
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
        }

        if (loggedInUser.isSignedIn = true) {
            history.replace(from);
          }

        e.preventDefault();
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="container row ">
                <div className="forms col-md-6">
                    <h3 className=" col-10 text-center">Login</h3>
                    <div className="col-10 text-center">
                        <input type="checkbox" onChange={handleChangeSignUp} name="newUser" id="" />
                        <label htmlFor="newUser" className="ml-2">For Sign Up</label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="col-10">
                            {newUser && <input name="displayName" onBlur={handleBlur} className="form-control border-btm" placeholder="Your username" required />}
                        </div>
                        <br />

                        <div className="col-10">
                            <input name="email" onBlur={handleBlur} className="form-control border-btm" placeholder="Your Email" required />
                        </div>

                        <br />
                        <div className="col-10">
                            <input name="password" type="password" onBlur={handleBlur} placeholder="Yous password" className="form-control border-btm" />

                        </div>
                        <br />
                        <div className="col-10">
                            <input type="submit" value={newUser ? "Sign Up" : "Login"} className=" col-11 btn btn-mix ml-3" />
                        </div>

                    </form>
                    <br />
                    <p className="text-danger ml-4">{loggedInUser.error}</p>
                    {loggedInUser.success && <p className="text-success col-10 text-center">User {newUser ? 'Created' : "Logged In"} Successfully</p>}
                </div>
                <div className="login-img col-md-5 mt-5">

                </div>
            </div>
        </div>
    );
};

export default Login;
// border: 1px solid #ced4da;
// border-radius: .25rem;