import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './user.css';

const User = ({ username, email }) => {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        name: username,
        email: email,
        reservation: null
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8081/users/details/${encodeURIComponent(username)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                const data = await response.json();
                console.log('User data:', data);

                const firstReservation = data.reservations.length > 0 ? data.reservations[0] : null;
                setUser({
                    name: data.userName,
                    email: data.email,
                    reservation: firstReservation
                });
            } catch (error) {
                console.error("Error fetching user details:", error);
                setMessage("An error occurred. Please try again.");
            }
        };

        fetchUserDetails();
    }, [username]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8081/users/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: user.name, newPassword: password })
            });

            if (!response.ok) {
                if (response.status === 403) {
                    setMessage("You are not authorized to perform this action.");
                    return;
                }
                throw new Error(`HTTP status ${response.status}`);
            }

            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                console.error("Error parsing JSON response:", jsonError);
                setMessage("Unexpected response format. Please try again.");
                return;
            }

            console.log('Response:', data);
            setMessage("Password changed successfully");
        } catch (error) {
            console.error("Error changing password:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    const handleCardPageNavigation = () => {
        navigate('/cardPage');
    };

    return (
        <div className="user-container">
            <div className="user-details">
                <h1>Welcome, {user.name}!</h1>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Reservation:</strong></p>
                {user.reservation ? (
                    <ul>
                        <li>{user.reservation.roomType} - {user.reservation.date}</li>
                    </ul>
                ) : (
                    <p>No reservations yet</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                    </div>
                    <button type="submit">Change</button>
                </form>
                {message && <p className="message">{message}</p>}
                <button onClick={handleCardPageNavigation}>Save Your Card Information</button>
            </div>
        </div>
    );
}

export default User;
