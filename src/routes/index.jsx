import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import ManufacturerDashboard from "../pages/Dashboard/ManufacturerDashboard";
import VendorDashboard from "../pages/Dashboard/VendorDashboard";
import CustomerDashboard from "../pages/Dashboard/CustomerDashboard";
import Profile from "../pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Manufacturer Dashboard */}
      <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />
      {/* Vendor Dashboard */}
      <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      {/* Customer Dashboard */}
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;

