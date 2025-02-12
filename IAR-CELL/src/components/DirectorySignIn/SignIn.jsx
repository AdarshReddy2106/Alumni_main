import './SignIn.css';
import PropTypes from 'prop-types'; 
import {
    LoginSocialGoogle,
    LoginSocialLinkedin,
} from 'reactjs-social-login';

import {
    GoogleLoginButton,
    LinkedInLoginButton,
} from 'react-social-login-buttons';

import logo from '../../assets/iar.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



const REDIRECT_URI = '/AlumniDirectory';
const port = 3000;
const ip = import.meta.env.VITE_IP_ADDRESS;
const GoogleClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;



const SignIn = ({ setToken }) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [headerText,setHeaderText] = useState('Alumni Association IIT Palakkad');
    const [footerText, setFooterText] = useState('Sign-In to Know your Alumni');
    const [googleText, setGoogleText] = useState('Sign-In with Google');
    const [linkedInText, setLinkedInText] = useState('Sign-In with LinkedIn');





    useEffect(() => {
        const mediaQuery1 = window.matchMedia('(max-width: 320px)');
        const mediaQuery2 = window.matchMedia('(max-width: 270px)');
        const mediaQuery3 = window.matchMedia('(max-width:308px)');

        const handleResize1 = (e) => {
            if (e.matches) {
                setFooterText('Know your Alumni');
                setGoogleText('Google Login');
                setLinkedInText('LinkedIn Login');
            } else {
                setFooterText('Sign-In to Know your Alumni');
                setGoogleText('Sign-In with Google');
                setLinkedInText('Sign-In with LinkedIn');
            }
        };

        const handleResize2 = (e) => {
            if (e.matches) {
                setGoogleText('Login');
                setLinkedInText('Login');
            } else {
                setGoogleText('Google Login'); 
                setLinkedInText('LinkedIn Login');
            }
        };

        const handleResize3 = (e) => {
            if (e.matches) {
                setHeaderText('Alumni Association');
            } else {
                setHeaderText('Alumni Association IIT Palakkad');
            }
        };

        mediaQuery1.addEventListener('change', handleResize1);
        mediaQuery2.addEventListener('change', handleResize2);
        mediaQuery3.addEventListener('change', handleResize3);

        if (mediaQuery1.matches) {
            setFooterText('Know your Alumni');
            setGoogleText('Google Login'); 
            setLinkedInText('LinkedIn Login');
        }

        if (mediaQuery2.matches) {
            setGoogleText('Login'); 
            setLinkedInText('Login');
        }

        if (mediaQuery3.matches) {
            setHeaderText('Alumni Association');
        }

        return () => {
            mediaQuery1.removeEventListener('change', handleResize1);
            mediaQuery2.removeEventListener('change', handleResize2);
            mediaQuery3.removeEventListener('change', handleResize3);
        };
    }, []);



    const handleSocialLogin = async (email) => {
        try {
            const response = await fetch(`http://${ip}:${port}/check-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.exists) {
                setToken(true);
                navigate(REDIRECT_URI);
            } 
            else {
                console.log('Email does not exist in the database or is undefined');
                // console.log(data);
                setErrorMessage(`Email Not Found? 😢`);
            }

        } catch (error) {
            console.error('Error during fetch:', error);
            setErrorMessage(`Server Error 😭!`);
        }
    };


    const handleNormalLogin = async (email) => {
        setToken(true);
        navigate(REDIRECT_URI);
        
    };




    return (
        <div className='DSGNfull-container'>
            <div className='DSGNfull-wrapper'>
                <div className='DSGN-form'>
                    <div className='DSGNform-header'>
                        <img src={logo} alt="iit-pkd" />
                        <br />
                        <div className='DSGNform-header-text'>
                            <p>{headerText}</p>
                        </div>
                    </div>

                    <div className='DSGNform-continue-container'>
                        <div className='DSGNform-continue-wrapper'>
                            <LoginSocialGoogle
                                client_id={GoogleClientID}
                                onResolve={async (response) => {
                                    const email = response.data.email;
                                    // console.log(email);

                                    if (typeof(email) != "undefined"){

                                        if ((email.endsWith("@iitpkd.ac.in")) || (email.endsWith("@smail.iitpkd.ac.in"))){
                                            handleNormalLogin(email);
                                        }
                                        else{
                                            handleSocialLogin(email);
                                        }

                                    }
                                    else{
                                        setErrorMessage("Not enough permission for email!! 😢");
                                        
                                    }
                                
                                }}
                                onReject={(err) => {
                                    console.log(err);
                                }}
                                scope="profile email"
                                prompt="select_account"
                            >

                                <GoogleLoginButton style={{ marginBottom: '1rem', borderRadius: '0.7rem' }}>
                                    <span style={{ fontSize: 'medium' }}>{googleText}</span>
                                </GoogleLoginButton>

                            </LoginSocialGoogle>




                            <LoginSocialLinkedin
                                isOnlyGetToken
                                client_id={''} 
                                client_secret={''} 
                                onResolve={(response) => {
                                    const email = response.data.email;
                                    if (typeof(email) != "undefined"){

                                        if ((email.endsWith("@iitpkd.ac.in")) || (email.endsWith("@smail.iitpkd.ac.in"))){
                                            handleNormalLogin(email);
                                        }
                                        else{
                                            handleSocialLogin(email);
                                        }

                                    }
                                    else{
                                        setErrorMessage("Not enough permission for email!! 😢");
                                        
                                    }
                                }}
                                onReject={(err) => {
                                    console.log(err);
                                }}
                                scope="profile email"
                                prompt="select_account"
                            >

                                <LinkedInLoginButton style={{ marginBottom: '1rem', borderRadius: '0.7rem' }}>
                                    <span style={{ fontSize: 'medium' }}>{linkedInText}</span>
                                </LinkedInLoginButton>

                            </LoginSocialLinkedin>

                            {errorMessage && (
                                <div className='DSGNform-error-message' style={{ color: "#381F20", fontSize: "1.1rem" }}>
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='DSGNform-footer'>
                        <div className='DSGNform-footer-wrapper'>
                            <p>{footerText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



SignIn.propTypes = {
    setToken: PropTypes.func.isRequired,
};




export default SignIn;
