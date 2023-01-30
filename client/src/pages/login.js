import React from "react";
import { useState } from "react";

const Login = () => {


    const [token, setToken] = useState("")

    function authenticate() {
        var request = require('request');
        /* Load the HTTP library */
        var http = require('http');

        /* Create an HTTP server to handle responses */

        http
            .createServer(function (request, response) {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write('Hello World');
                response.end();
            })
            .listen(8888);


    }

    return (
        <div>
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"> Remember me</input>
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </input>
                </input>
            </form>
        </div>
    )

}

export default Login