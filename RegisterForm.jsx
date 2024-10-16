import React, { useState } from "react";
import './registerForm.css'; // Import the CSS file for register form styling
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const user = {
            userName: username,
            email: email,
            password
        };

        try {
            const response = await axios.post('http://localhost:8081/users', user);
            setSuccess('Registration successful!');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } catch (error) {
            if (error.response) {
                console.log('Error response:', error.response);
                if (error.response.status === 400) {
                    setError('Email already exists');
                } else if (error.response.status === 403) {
                    setError('Forbidden: You might not have permission to register');
                } else {
                    setError('Registration failed');
                }
            } else {
                console.error('Error:', error);
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="registerForm">
                <h1>Register</h1>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <div className="input-box">
                    <input type="text" placeholder="Username" className="input-box-input" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" className="input-box-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" className="input-box-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" className="input-box-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
