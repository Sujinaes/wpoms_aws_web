import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const VendorProfile = () => {
  return (
    <div className="profile-wrapper">
      {/* SideNavBar Component */}
      <aside className="profile-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined logo-icon" data-icon="verified_user">verified_user</span>
            WPOMS
          </div>
          <p className="sidebar-subtitle">Vendor Portal</p>
        </div>

        <nav className="sidebar-nav">
          <Link className="nav-item" to="/vendor/dashboard">
            <span className="material-symbols-outlined nav-icon" data-icon="dashboard">dashboard</span>
            <span className="nav-text">Dashboard</span>
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
          <Link className="nav-item nav-item-active" to="/vendor/profile">
            <span className="material-symbols-outlined nav-icon" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
            <span className="nav-text">User Profile</span>
          </Link>
        </div>
      </aside>

      {/* TopAppBar Component */}
      <header className="profile-topbar">
        <div className="topbar-left">
        </div>
        <div className="topbar-right">
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="profile-main">
        <div className="profile-container">
          
          {/* User Hero Section */}
          <section className="hero-section">
            <div className="avatar-wrapper">
              <div className="user-avatar-large gold-gradient">
                <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#fff' }}>account_circle</span>
              </div>
            </div>
            
            <div className="hero-info">
              <div className="hero-title-row">
                <h2 className="user-name-large">Rahul Kumar</h2>
                <span className="role-badge">Vendor</span>
              </div>
              <p className="user-email">vendor@alliance.com</p>
            </div>
          </section>

          {/* Settings Grid */}
          <div className="settings-grid">
            
            {/* Centered Column: Vendor Info */}
            <div className="settings-card">
              <div className="card-header">
                <h3 className="card-title">Vendor Information</h3>
                <span className="material-symbols-outlined card-icon">local_shipping</span>
              </div>
              
              <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Vendor Name</label>
                  <input className="form-input" type="text" defaultValue="Rahul Kumar" />
                </div>

                <div className="form-group">
                  <label className="form-label">Vendor Email</label>
                  <input className="form-input" type="email" defaultValue="vendor@alliance.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" defaultValue="+91 85934 93481" />
                </div>

                <div className="form-group">
                  <label className="form-label">GST Number</label>
                  <input className="form-input" type="text" defaultValue="GSTIN987654321" />
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <textarea className="form-input form-textarea" rows="3" defaultValue="78, Harmony Road, Industrial Area&#13;&#10;Mumbai, Maharashtra"></textarea>
                </div>

                <button className="btn-save gold-gradient" type="button">
                  Save Changes
                </button>
              </form>
            </div>

          </div>



        </div>
      </main>
    </div>
  );
};

export default VendorProfile;
