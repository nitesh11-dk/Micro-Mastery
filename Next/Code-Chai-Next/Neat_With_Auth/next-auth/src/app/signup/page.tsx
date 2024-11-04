
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            const data = response.data;
            if (data.success) {
                alert("login succesfully")
            } else {
                setError(data.error);
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                {error && (
                    <div className="bg-red-500 text-white p-3 rounded mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Username</label>
                        <input
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({...user, username: e.target.value})}
                            className="w-full p-2 border rounded-md dark:bg-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            className="w-full p-2 border rounded-md dark:bg-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            className="w-full p-2 border rounded-md dark:bg-gray-700"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}