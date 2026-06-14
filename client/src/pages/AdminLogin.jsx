import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
      >

        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            A
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to access dashboard
          </p>

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default AdminLogin;