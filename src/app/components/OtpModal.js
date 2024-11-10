// components/OtpModal.js
import React, { useState } from 'react';

const OtpModal = ({ isOpen, onRequestClose, email, onSubmit }) => {
    const [otp, setOtp] = useState('');

    const handleOtpSubmit = () => {
        onSubmit(otp);
    };

    if (!isOpen) return null;

    return (
        <div className="otp-modal-overlay">
            <div className="otp-modal">
                <h2>Enter OTP for {email}</h2>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={handleOtpSubmit}>Verify</button>
                <button onClick={onRequestClose}>Close</button>
            </div>
        </div>
    );
};

export default OtpModal;
