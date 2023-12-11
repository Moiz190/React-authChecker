import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  { handleAuthLogin } from '../store/auth'
export default function Login() {
    const [loginCreds, setLoginCreds] = useState({
        email: "",
        password: "",
        isAuthenticated: false,
    });
    const [validation, setValidation] = useState({
        email: false,
        password: false,
        isAuth: false,
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleLogin = () => {
        const { email, password } = loginCreds;
        if (email && password) {
            setLoginCreds((oldVal) => ({ ...oldVal, isAuthenticated: true }));
            if (email === "admin@gmail.com" && password === "123") {
                setValidation((oldVal) => ({ ...oldVal, isAuth: false }));
                dispatch(handleAuthLogin({email, password}))
                navigate('/admin/home')
                window.location.pathname = "/admin/home";
            } else if (email === "brand@gmail.com" && password === "123") {
                setValidation((oldVal) => ({ ...oldVal, isAuth: false }));
                dispatch(handleAuthLogin({email, password}))
                window.location.pathname = "/brand/home";
            } else {
                dispatch(handleAuthLogin({email, password}))
                setValidation((oldVal) => ({ ...oldVal, isAuth: true }));
            }
        } else {
            setLoginCreds((oldVal) => ({ ...oldVal, isAuthenticated: false }));
        }
    };
    return (
        <div className="grid grid-cols-1 bg-center bg-cover lg:grid-cols-2 justify-center items-center h-full p-2">
            <div className="hidden lg:block"></div>
            <div className="flex flex-col shadow-lg p-4 rounded-lg min-w-[300px] mx-auto w-full max-w-[400px]">
                <div className="flex flex-col gap-1">
                    <div className="mb-6 text-center font-semibold text-3xl">
                        <span>Welcome Here</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="userName">Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="border p-1.5"
                            onChange={(e) => {
                                setLoginCreds((oldVal) => ({
                                    ...oldVal,
                                    email: e.target.value,
                                }));
                                if (!emailRegex.test(e.target.value) || !e.target.value) {
                                    setValidation((oldVal) => ({ ...oldVal, email: true }));
                                } else {
                                    setValidation((oldVal) => ({ ...oldVal, email: false }));
                                }
                            }}
                        />
                    </div>
                    <div className="flex mb-6 flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-1.5"
                            onChange={(e) => {
                                setLoginCreds((oldVal) => ({
                                    ...oldVal,
                                    password: e.target.value,
                                }));
                                if (!e.target.value) {
                                    setValidation((oldVal) => ({ ...oldVal, password: true }));
                                } else {
                                    setValidation((oldVal) => ({ ...oldVal, password: false }));
                                }
                            }}
                        />
                    </div>
                    {validation.isAuth && (
                        <div className="text-center text-red-500">
                            <span>The username or password is incorrect</span>
                        </div>
                    )}
                    <button
                        className="bg-blue-400"
                        disabled={!loginCreds.password || !loginCreds.email}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
