import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ManufacturerDashboard from "../pages/Dashboard/ManufacturerDashboard";
import VendorDashboard from "../pages/Dashboard/VendorDashboard";
import CustomerDashboard from "../pages/Dashboard/CustomerDashboard";
import ManufacturerProfile from "../pages/Profile/ManufacturerProfile";
import VendorProfile from "../pages/Profile/VendorProfile";
import CustomerProfile from "../pages/Profile/CustomerProfile";
import Home from "../pages/Home/Home";

import ManufacturerDashboardLayout from "../pages/Dashboard/ManufacturerDashboard";
import VendorDashboardLayout from "../pages/Dashboard/VendorDashboard";
import CustomerDashboardLayout from "../pages/Dashboard/CustomerDashboard";
import ManufacturerOverview from "../pages/Overview/ManufacturerOverview";
import VendorOverview from "../pages/Overview/VendorOverview";
import CustomerOverview from "../pages/Overview/CustomerOverview";
import Staffs from "../pages/Staffs/Staffs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/manufacturer" element={<ManufacturerDashboardLayout />}>
          <Route index element={<ManufacturerOverview />} />
          <Route path="profile" element={<ManufacturerProfile />} />
        </Route>

        <Route path="/vendor" element={<VendorDashboardLayout />}>
          <Route index element={<VendorOverview />} />
          <Route path="profile" element={<VendorProfile />} />
        </Route>

        <Route path="/customer" element={<CustomerDashboardLayout />}>
          <Route index element={<CustomerOverview />} />
          <Route path="profile" element={<CustomerProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
