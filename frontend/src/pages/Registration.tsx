import { GoogleLogin } from '@leecheuk/react-google-login';
import { NavLink, useNavigate } from "react-router-dom";

const clientId = "177264412292-61gchrb5v85ng2bop3om5k2kk1k0k97u.apps.googleusercontent.com"

function Login() {
    const navigate = useNavigate();
    const goBack = async () => {
        navigate("/");
    };

    const onSuccess = (res: any) => {
        console.log("Login successful! Current user: ", res.profileObj);
        localStorage.setItem("userInfo", JSON.stringify(res.profileObj));
        localStorage.setItem("loginBool", "true");
        goBack();

    }

    const onFailure = (res: any) => {
        console.log("Login failed. res: ", res);
    }


    return (
        <div className='h-screen  
        bg-gradient-to-r 
        from-primary_blue
        to-primary_blue
        via-slate-500
        animate-gradient-xy p-4'>
            <div className="flex justify-end items-end">
                <button className='bg-primary_blue-light-1 hover:bg-primary_blue text-white font-bold py-2 px-4  rounded'
                    onClick={goBack}>
                    Home
                </button>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <div>
                    <h1 className="flex items-center w-full  justify-center text-4xl font-extrabold  text-primary_blue-light-2">
                        Aggie
                    </h1>
                    <h1 className="flex items-center w-full  justify-center text-4xl font-extrabold  text-primary_blue-light-1">

                        Compute
                    </h1>
                </div>

                <div>
                    <h1 className="flex items-center w-full  justify-center text-4xl font-extrabold  text-primary_blue-light-0 mt-24">
                        Sign Up
                    </h1>

                </div>



                <div id="signInButton" className='mt-6 w-[18%]'>
                    <GoogleLogin
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button" className="text-black w-full  bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.69 190.5" ><g transform="translate(1184.583 765.171)"><path clip-path="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4" /><path clip-path="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853" /><path clip-path="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05" /><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clip-path="none" mask="none" /></g></svg>Sign Up with Google<div></div></button>
                        )}
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                        fetchBasicProfile={true}
                    />
                </div>

                <div id="signInButton" className='mt-2 w-[18%]'>
                    <button type="button" className="text-black w-full  bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M25 525 c-25 -24 -25 -26 -25 -205 0 -179 0 -181 25 -205 l24 -25
271 0 271 0 24 25 c25 24 25 26 25 205 0 179 0 181 -25 205 l-24 25 -271 0
-271 0 -24 -25z m509 -33 c-5 -5 -55 -44 -111 -87 l-103 -78 -102 78 c-57 43
-107 82 -112 87 -6 4 91 8 214 8 123 0 220 -4 214 -8z m-347 -127 c67 -52 127
-95 133 -95 6 0 66 43 133 95 67 52 125 95 130 95 8 0 10 -281 1 -304 -5 -14
-38 -16 -264 -16 -226 0 -259 2 -264 16 -9 23 -7 304 2 304 4 0 62 -43 129
-95z"/>
                        </g>
                    </svg>Sign Up with Email<div></div></button>
                </div>
                <div className='text-white mt-5'>
                    Alreay have an account? <span className='text-primary_blue-light-0'>
                        <NavLink to="/login" className=" no-underline hover:underline"> Sign In </NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Login;