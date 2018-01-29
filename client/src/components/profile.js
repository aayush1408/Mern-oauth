import React from 'react';
import axios from 'axios';
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {profile:[]};
        axios.get('/api/current_user')
            .then((res) => {
                this.setState({ profile:res.data });
                console.log(this.state.profile);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    render() { 
        if(this.state.profile.googleId){
        return ( 
            <div>
                <ul>
                    <li>GoogleID:{this.state.profile.googleId}</li>
                </ul>
                <a href="/api/logout">Logout</a>
            </div>
         )
        }
        else{
            return (
                <div>
                    <ul>
                        <li>FacebookID:{this.state.profile.facebookId}</li>
                    </ul>
                    <a href="/api/logout">Logout</a>
                </div>
            )  
        }
    }
}
 
export default Profile;