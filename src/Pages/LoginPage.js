import React, {useState} from "react";
import AuthPage from "../components/Common/AuthPage";
import Login from '../components/Login';

const LoginPage= () => {
    const [ring, allowRing] = useState(false);
    return (
        <AuthPage ring={ring}>
            <Login onError={(isError) => {allowRing(isError)}}/>
        </AuthPage>
    )
};

export default LoginPage;