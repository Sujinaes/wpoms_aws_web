import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const CustomerProfile = () => {
  return (
    <div className="profile-wrapper">
      {/* SideNavBar Component */}
      <aside className="profile-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined logo-icon" data-icon="verified_user">verified_user</span>
            WPOMS
          </div>
          <p className="sidebar-subtitle">Customer Portal</p>
        </div>

        <nav className="sidebar-nav">
          <Link className="nav-item" to="/customer/dashboard">
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
          <Link className="nav-item nav-item-active" to="/customer/profile">
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
                <h2 className="user-name-large">Reshma M</h2>
                <span className="role-badge">Customer</span>
              </div>
              <p className="user-email">reshma.m@example.com</p>
            </div>
          </section>

          {/* Settings Grid */}
          <div className="settings-grid">
            
            {/* Centered Column: Customer Info */}
            <div className="settings-card">
              <div className="card-header">
                <h3 className="card-title">Personal Information</h3>
                <span className="material-symbols-outlined card-icon">person</span>
              </div>
              
              <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Customer Name</label>
                  <input className="form-input" type="text" defaultValue="Reshma M" />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" defaultValue="+91 98765 43210" />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input className="form-input" type="date" defaultValue="1995-05-15" />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Preference</label>
                  <select className="form-input">
                    <option value="email">Email</option>
                    <option value="phone">Phone / SMS</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Shipping Address</label>
                  <textarea className="form-input form-textarea" rows="3" defaultValue="42, Tech Park Avenue&#13;&#10;Bangalore, Karnataka"></textarea>
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

export default CustomerProfile;
