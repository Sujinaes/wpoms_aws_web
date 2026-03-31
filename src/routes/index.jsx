import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import ManufacturerDashboard from "../pages/Dashboard/ManufacturerDashboard";
import VendorDashboard from "../pages/Dashboard/VendorDashboard";
import CustomerDashboard from "../pages/Dashboard/CustomerDashboard";
import ManufacturerProfile from "../pages/Profile/ManufacturerProfile";
import VendorProfile from "../pages/Profile/VendorProfile";
import CustomerProfile from "../pages/Profile/CustomerProfile";

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
      {/* Profiles */}
      <Route path="/manufacturer/profile" element={<ManufacturerProfile />} />
      <Route path="/vendor/profile" element={<VendorProfile />} />
      <Route path="/customer/profile" element={<CustomerProfile />} />
    </Routes>
  );
};

export default AppRoutes;

