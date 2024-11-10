// pages/signup.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import OtpModal from '../components/OtpModal';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOtpModalOpen, setOtpModalOpen] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/signup', { email, password });
            setOtpModalOpen(true); // Open OTP modal after signup
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>

            <OtpModal
                isOpen={isOtpModalOpen}
                onRequestClose={() => setOtpModalOpen(false)}
                email={email}
            />
        </div>
    );
};

export default Signup;
