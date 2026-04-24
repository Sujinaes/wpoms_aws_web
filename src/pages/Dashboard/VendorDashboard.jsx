import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import DashboardTopbar from '../../components/DashboardTopbar';
import { profileService } from '../../services/profileService';
import { Logo } from '../../components/logo/Logo';
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
          <aside className="dashboard-sidebar">
            <div className="sidebar-header">
              <Logo />
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
              <Link className="nav-item" to="/vendor/product-catalog">
                <span className="material-symbols-outlined nav-icon" data-icon="inventory_2">inventory_2</span>
                <span className="nav-text">Product Catalog</span>
              </Link>
              <a className="nav-item" href="#">
                <span className="material-symbols-outlined nav-icon" data-icon="verified_user">verified_user</span>
                <span className="nav-text">Warranties</span>
              </a>
              <a className="nav-item" href="#">
                <span className="material-symbols-outlined nav-icon" data-icon="shopping_cart">shopping_cart</span>
                <span className="nav-text">Purchase Orders</span>
              </a>
              {/* <a className="nav-item" href="#">
                <span className="material-symbols-outlined nav-icon" data-icon="inventory_2">inventory_2</span>
                <span className="nav-text">Archive</span>
              </a> */}
            </nav>
    
            <div className="sidebar-footer">
              <Link to="/vendor/profile" className="user-profile-link">
                <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#CBD5E1' }}>account_circle</span>
                <div className="user-info">
                  <p className="user-name">{userName}</p>
                  <p className="user-role">Vendor</p>
                </div>
              </Link>
            </div>
          </aside>
    
          <main className="dashboard-main">
            <DashboardTopbar title="Vendor Dashboard" />
    
            <div className="dashboard-content">
              <Outlet />
            </div>
    
            <div className="dashboard-bg-glow"></div>
          </main>
    
    
        </div>
  );
};

export default VendorDashboardLayout;
