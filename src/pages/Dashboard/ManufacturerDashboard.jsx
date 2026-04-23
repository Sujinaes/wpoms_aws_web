import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { LogoWithoutSubtitle as Logo } from '../../components/logo/Logo';
import DashboardTopbar from '../../components/DashboardTopbar/DashboardTopbar';
import { profileService } from '../../services/profileService';


const ManufacturerDashboardLayout = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await profileService.getManufacturerProfile(userId);
          setUserName(data?.companyName || "Manufacturer");
        }
      } catch (err) {
        console.error("Error fetching manufacturer profile:", err);
        setUserName("Manufacturer");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* SideNavBar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <Logo />
        </div>
        <nav className="sidebar-nav">
          <Link className="nav-item nav-item-active" to="/manufacturer">
            <span className="material-symbols-outlined nav-icon" data-icon="dashboard">dashboard</span>
            <span className="nav-text">Dashboard</span>
          </Link>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="verified_user">verified_user</span>
            <span className="nav-text">Warranties</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="shopping_cart">shopping_cart</span>
            <span className="nav-text">Purchase Orders</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="inventory_2">inventory_2</span>
            <span className="nav-text">Archive</span>
          </a>
          <a className="nav-item" href="#">
            <span className="material-symbols-outlined nav-icon" data-icon="settings">settings</span>
            <span className="nav-text">Settings</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-new-entry gold-gradient" onClick={() => navigate('/manufacturer/add-product')}>
            <span className="material-symbols-outlined" data-icon="add">add</span>
            Add Product
          </button>

          <Link to="/manufacturer/profile" className="user-profile-link">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: '#CBD5E1' }}>account_circle</span>
            <div className="user-info">
              <p className="user-name">{userName}</p>
              <p className="user-role">Manufacturer</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <DashboardTopbar title="Manufacturer Dashboard" />

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

export default ManufacturerDashboardLayout;
