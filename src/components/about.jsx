import React, { Component } from 'react';
import { greeting,socialMediaLinks } from '../infos'

import { withRouter } from "react-router";
function About() {

    return (
        <div className='text-center  main-wrapper'>
            <div className='text-center m-4 p-4'>
                <img src={greeting.avatar} className="rounded-circle mb-3 author"
                    alt="Avatar" />
                <h5 className="mb-2"><strong>{greeting.username}</strong></h5>
                <p className="text-muted">Android Devloper <span className="badge bg-primary">PRO</span></p>


                <p className='mt-4'>{greeting.subTitle}</p>
                <p className='mt-4'>{greeting.about}</p>

                <ul className="social-list list-inline py-3 mx-auto">

                    <li className="list-inline-item">
                        <a href={socialMediaLinks.github} target="_blank">
                            <i className="fab fa-github fa-fw" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href={socialMediaLinks.linkedin} target="_blank">
                            <i className="fab fa-linkedin-in fa-fw" />
                        </a>
                    </li>
                    <li className="list-inline-item">

                        <a href={socialMediaLinks.facebook} target="_blank">
                            <i className="fab fa-facebook fa-fw" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href={socialMediaLinks.instagram} target="_blank">
                            <i className="fab fa-instagram fa-fw" />
                        </a>
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default  About
