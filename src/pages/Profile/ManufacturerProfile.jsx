import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const ManufacturerProfile = () => {
  return (
    <div className="profile-wrapper">
      {/* SideNavBar Component */}
      <aside className="profile-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined logo-icon" data-icon="verified_user">verified_user</span>
            WPOMS
          </div>
          <p className="sidebar-subtitle">Manufacturer Portal</p>
        </div>

        <nav className="sidebar-nav">
          <Link className="nav-item" to="/manufacturer/dashboard">
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
          <Link className="nav-item nav-item-active" to="/manufacturer/profile">
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
                <h2 className="user-name-large">Manufacturer Enterprises</h2>
                <span className="role-badge">Manufacturer</span>
              </div>
              <p className="user-email">contact@manufacturer.com</p>
            </div>
          </section>

          {/* Settings Grid */}
          <div className="settings-grid">
            
            {/* Centered Column: Company Info */}
            <div className="settings-card">
              <div className="card-header">
                <h3 className="card-title">Company Information</h3>
                <span className="material-symbols-outlined card-icon">store</span>
              </div>
              
              <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input className="form-input" type="text" defaultValue="Manufacturer Enterprises" />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Email</label>
                  <input className="form-input" type="email" defaultValue="contact@manufacturer.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Phone</label>
                  <input className="form-input" type="tel" defaultValue="+1 (555) 012-3456" />
                </div>

                <div className="form-group">
                  <label className="form-label">GST Number</label>
                  <input className="form-input" type="text" defaultValue="GSTIN123456789" />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Address</label>
                  <textarea className="form-input form-textarea" rows="3" defaultValue="1200 Industrial Way, Suite 400&#13;&#10;New York, NY 10001"></textarea>
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

export default ManufacturerProfile;
