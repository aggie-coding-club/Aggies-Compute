import { GoogleLogin } from '@leecheuk/react-google-login';

const clientId = "177264412292-61gchrb5v85ng2bop3om5k2kk1k0k97u.apps.googleusercontent.com"

function Login() {
    const onSuccess = (res: any) => {
        console.log("Login successful! Current user: ", res.profileObj);
    }
    const onFailure = (res: any) => {
        console.log("Login failed. res: ", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                fetchBasicProfile={true}
            />
        </div>
    )
};

export default Login;