import React from "react";
import { useState } from "react";

const Login = () => {


    const [token, setToken] = useState("")

    function authenticate() {
        const request = require('request');
        // let response = request.get("localhost:3000/login")
        /* Load the HTTP library */
        // var http = require('http');

        /* Create an HTTP server to handle responses */

        // http
        //     .createServer(function (request, response) {
        //         response.writeHead(200, { 'Content-Type': 'text/plain' });
        //         response.write('Hello World');
        //         response.end();
        //     })
        //     .listen(8888);


    }

    return (
        <div>
            <input></input>
            <input></input>
            <button onClick={() => authenticate()}>Log in with Spotify</button>
        </div>
    )

}

export default Login