import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton } from "@mui/material";

import '../../main.css'


async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (

        <div className='row align-center justify-center vh-100'>
            <div className='col xs-9 sm-12 md-6 lg-4 xl-3'>
                <div className="card"></div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row justify-space-between'>
                            <div className='col align-self-start'>
                                <h2 className='mb-2'><b>Tracker</b>Manager</h2>
                            </div>
                            <div className='col align-end'>
                                <IconButton onClick={toggleTheme}>
                                    {theme === "dark" ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )}
                                </IconButton>
                            </div>
                        </div>

                        <p className=" mb-5">Please enter your login and password!</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label className="form-label" for="example-username">Email address</label>
                                <input className="form-control" type="email" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='form-group mb-3'>
                                <label className="form-label" for="example-username">Password</label>
                                <input className="form-control" type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <p className="small">
                                    <a className="text-primary" href="#!">
                                        Forgot password?
                                    </a>
                                </p>
                            </div>
                            <div>
                                <button className='btn primary block' type='Submit'>Login</button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <p className="mb-0  text-center">
                                Don't have an account?{" "}
                                <a href="{''}" className="text-primary fw-bold">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}