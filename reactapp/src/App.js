import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom"; // Remove useNavigate
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminPannel from "./AdminPannel";
import AdminLogin from "./customer/Auth/AdminLogin";

function App() {
  // Remove the useNavigate hook from here

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin" element={<AdminPannel />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Use Routes inside the /admin route to handle navigation */}
        <Route
          path="/admin"
          element={
            localStorage.getItem("admin") ? (
              <Routes>
                <Route path="/" element={<Outlet />} />
              </Routes>
            ) : (
              <Navigate to="/adminlogin" /> // Use Navigate here instead of calling navigate directly
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
