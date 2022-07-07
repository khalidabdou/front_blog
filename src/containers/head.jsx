import React, { Component } from 'react'

class Head extends Component {
    state = {}
    render() {
        return (
            <>
                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link id="theme-style" rel="stylesheet" href="assets/css/theme-1.css" />
                <title>React App</title>
            </>
        );
    }
}

export default Head;