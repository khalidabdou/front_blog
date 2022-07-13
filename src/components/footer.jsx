import React, { Component } from 'react';
import Subscribe from './subscribe';

class Footer extends Component {
    state = {}
    render() {
        return (


            <footer className="text-center theme-bg-light main-wrapper">
                <Subscribe />

                {/* <div className="container pt-4">

                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter" />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-google" />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram" />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-linkedin" />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>

                    <section className='mb-4'>
                        <div className='row'>
                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Backend</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Frontend</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3 mx-auto">
                               
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Android</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3 mx-auto">
                        
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">devOps</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Very long link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </section>

                </div> */}

                <div
                    className="text-center text-dark p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2022 Copyright:
                    <a className="text-dark" href="/">
                        Special Ones Group
                    </a>
                </div>


            </footer>

        );
    }
}

export default Footer;