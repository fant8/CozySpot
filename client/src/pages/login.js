import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Button } from 'reactstrap';
import UserProfiles from './users.json';
import './Login.css';
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginStatus: 'not logged in',
        };
    }
    withRouter(Component) {
        function ComponentWithRouterProp(props) {
            let location = useLocation();
            let navigate = useNavigate();
            let params = useParams();
            return (
                <Component
                    {...props}
                    router={{ location, navigate, params }}
                />
            );
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleSubmit = (event) => {
        var found = false;
        event.preventDefault();
        UserProfiles.forEach((user) => {
            // as of now checks for correct username only and not the password
            if (user.Username == this.state.username) {
                found = true;
            }
        });
        if (found) {
            this.setState({
                loginStatus: 'Successfully logged in!',
            });
            console.log(this.props);
            this.props.history.push('/home');
        } else {
            this.setState({
                loginStatus: 'Login failed! Inavlid User/Pass',
            });
        }
    };

    render() {
        return (
            <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="For e.g. tmtanzeel"
                            onChange={this.handleUsernameChange}
                            type="text"
                            value={this.state.username}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="enter your password"
                            onChange={this.handlePasswordChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
                <h2>{this.state.loginStatus}</h2>
            </div>
        );
    }
}


export default withRouter(Login);