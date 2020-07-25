import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
import {GoogleLogin} from "react-google-login";
import {Redirect} from "react-router-dom";

export default class Auth extends Component {
    state = {
        isAuthenticated: false,
        user: null,
        webToken: "",
    };

    facebookResponse = (response) => {
        const webToken = response.accessToken;
        if (webToken) {
            this.setState({
                isAuthenticated: true,
                user: response.name,
                webToken,
            });
            localStorage.setItem("authenticated", "true");
        }
        // this.props.history.push("/home");
    };

    googleResponse = (response) => {
        const webToken = response.accessToken;
        if (webToken) {
            this.setState({
                isAuthenticated: true,
                webToken,
                user: response.profileObj.name,
            });
            //

            localStorage.setItem("authenticated", "true");
        }
        // this.props.history.push("/home");
    };

    render() {
        const {isAuthenticated} = this.state;
        const storageAcess = JSON.parse(localStorage.getItem("authenticated"));

        if (isAuthenticated || storageAcess) {
            return <Redirect to="/Home" />;
        } else {
            return (
                <div>
                    <FacebookLogin appId="346311036359776" autoLoad={false} fields="name,email,picture" callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId="259471173470-2ghs8t5huf7hr546lumhr04kdeqm1htr.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />
                </div>
            );
        }
    }
}
