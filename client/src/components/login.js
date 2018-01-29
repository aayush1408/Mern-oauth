import React from 'react';
class Login extends React.Component {
    render() { 
        return ( 
            <div>
                <a href="/auth/google" ><button>Login with google</button></a>
                <a href="/auth/facebook" ><button>Login with facebook</button></a>
            </div>
         )
    }
}
 
export default Login;