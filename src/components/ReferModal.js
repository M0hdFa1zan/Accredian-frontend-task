import React, { useState } from 'react';
import axios from 'axios';
import './ReferModal.css';

function ReferModal({ open, onClose }) {
    const [formData, setFormData] = useState({ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://accredian-backend-task-5ynl.onrender.com/api/refer', formData);
            alert('Referral sent successfully!');
            onClose();
            setFormData({ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '' });
        } catch (error) {
            setError('Error sending referral');
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    };

    return (
        <div className={`modal ${open ? 'show' : ''}`} onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Refer a Friend</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input name="referrerName" placeholder="Your Name" value={formData.referrerName} onChange={handleChange} required />
                    <input name="referrerEmail" placeholder="Your Email" value={formData.referrerEmail} onChange={handleChange} required />
                    <input name="refereeName" placeholder="Friend's Name" value={formData.refereeName} onChange={handleChange} required />
                    <input name="refereeEmail" placeholder="Friend's Email" value={formData.refereeEmail} onChange={handleChange} required />
                    <button className='btn-submit' type="submit">Submit</button>
                </form>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ReferModal;
