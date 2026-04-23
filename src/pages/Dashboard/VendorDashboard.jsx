import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import DashboardTopbar from '../../components/DashboardTopbar/DashboardTopbar';
import { profileService } from '../../services/profileService';

const VendorDashboardLayout = () => {
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await profileService.getVendorProfile(userId);
          setUserName(data?.vendorName || "Vendor");
        }
      } catch (err) {
        console.error("Error fetching vendor profile:", err);
        setUserName("Vendor");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* SideNavBar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined logo-icon" data-icon="verified_user">verified_user</span>
            WPOMS
          </div>
          <p className="sidebar-subtitle">Vendor Portal</p>
        </div>
        <nav className="sidebar-nav">
          <Link className="nav-item nav-item-active" to="/vendor">
            <span className="material-symbols-outlined nav-icon" data-icon="dashboard">dashboard</span>
            <span className="nav-text">Dashboard</span>
          </Link>
          <Link className="nav-item" to="/vendor/staffs">
            <span className="material-symbols-outlined nav-icon" data-icon="badge">badge</span>
            <span className="nav-text">Staffs</span>
          </Link>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="receipt_long">receipt_long</span>
            <span className="nav-text">My Orders</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="verified_user">verified_user</span>
            <span className="nav-text">Warranties</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="local_shipping">local_shipping</span>
            <span className="nav-text">Shipments</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="payments">payments</span>
            <span className="nav-text">Payments</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="settings">settings</span>
            <span className="nav-text">Settings</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-new-entry gold-gradient">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            New Order
          </button>

          <Link to="/vendor/profile" className="user-profile-link">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#CBD5E1' }}>account_circle</span>
            <div className="user-info">
              <p className="user-name">{userName}</p>
              <p className="user-role">Vendor</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <DashboardTopbar title="Vendor Dashboard" />

        {/* Page Content */}
        <div className="dashboard-content">
          <Outlet />
        </div>

        {/* Background detail */}
        <div className="dashboard-bg-glow"></div>
      </main>
    </div>
  );
};

export default VendorDashboardLayout;
