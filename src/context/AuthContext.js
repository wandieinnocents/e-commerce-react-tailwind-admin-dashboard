// src/context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('user');
            return storedUser && storedUser !== 'undefined' ? JSON.parse(storedUser) : null;
        } catch (err) {
            console.error('Invalid JSON in localStorage for user:', err);
            return null;
        }
    });
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return storedToken && storedToken !== 'undefined' ? storedToken : '';
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        setLoading(false);
    }, [token]);

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:4001/api/auth/login', {
                email,
                password,
            });

            const { token, user } = res.data.data; // Accessing the "data" inside "data"

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setToken(token);
            setUser(user);
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.response?.data?.error || "Signin failed. Please try again.";
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            throw new Error(errorMessage);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
        setToken('');
        setUser(null);
        navigate("/auth/sign-in");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
