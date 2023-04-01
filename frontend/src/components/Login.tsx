import { GoogleLogin } from '@leecheuk/react-google-login';
import { useNavigate } from "react-router-dom";

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
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
                fetchBasicProfile={true}
            />
        </div>
    )
};

export default Login;