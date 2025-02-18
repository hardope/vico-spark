import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import api from "../api";
import Notify from "../components/Notify";

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        if (isSignUp) {
            const [firstName, lastName] = name.split(" ");
            api.post("/user/create-user", { firstName, lastName, email, password, username })
                .then(() => {
                    Notify.success("Account Created Successfully");
                    setIsSignUp(false);
                })
                .catch((error) => {
                    Notify.error(error.response.data.message || "An error occurred");
                })
                .finally(() => {
                    setLoader(false);
                });
        } else {
            api.post("/auth/login", { email, password })
                .then((res) => {
                    Notify.success("Login Successful");
                    localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
                    localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
                    localStorage.setItem("USER", JSON.stringify(res.data.user));
                    navigate("/dashboard");
                })
                .catch(() => {
                    Notify.error("Invalid Credentials");
                })
                .finally(() => {
                    setLoader(false);
                });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {loader && <Loader />}
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-700">{isSignUp ? "Sign Up" : "Sign In"}</h2>
                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => setIsSignUp(false)}
                        className={`px-4 py-2 w-1/2 rounded-lg ${!isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignUp(true)}
                        className={`px-4 py-2 w-1/2 rounded-lg ${isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        Sign Up
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <>
                            <div className="mb-4">
                                <label className="block mb-1 font-medium text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-lg text-sm"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 font-medium text-gray-600">Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-2 border rounded-lg text-sm"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg text-sm"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg text-sm"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="w-full py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        {isSignUp ? "Create Account" : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
