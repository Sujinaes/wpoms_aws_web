import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

import DashboardTopbar from '../../components/DashboardTopbar';
import { profileService } from '../../services/profileService';

const CustomerDashboardLayout = () => {
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await profileService.getCustomerProfile(userId);
          setUserName(data?.customerName || "Customer");
        }
      } catch (err) {
        setUserName("Customer");
        return err;
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
          <p className="sidebar-subtitle">Customer Portal</p>
        </div>
        <nav className="sidebar-nav">
          <Link className="nav-item nav-item-active" to="/customer">
            <span className="material-symbols-outlined nav-icon" data-icon="dashboard">dashboard</span>
            <span className="nav-text">Dashboard</span>
          </Link>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="shopping_bag">shopping_bag</span>
            <span className="nav-text">My Purchases</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="verified_user">verified_user</span>
            <span className="nav-text">My Warranties</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="support_agent">support_agent</span>
            <span className="nav-text">Support</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="settings">settings</span>
            <span className="nav-text">Settings</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-new-entry gold-gradient">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
            New Purchase
          </button>

          <Link to="/customer/profile" className="user-profile-link">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#CBD5E1' }}>account_circle</span>
            <div className="user-info">
              <p className="user-name">{userName}</p>
              <p className="user-role">Customer</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <DashboardTopbar title="Customer Dashboard" />

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

export default CustomerDashboardLayout;
