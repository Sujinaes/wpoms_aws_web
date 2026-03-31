import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const CustomerDashboard = () => {
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
          <Link className="nav-item nav-item-active" to="/customer/dashboard">
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

          <Link to="/profile" className="user-profile-link">
            <div className="customer-avatar-initials">RM</div>
            <div className="user-info">
              <p className="user-name">Reshma M</p>
              <p className="user-role">Customer</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <h1 className="topbar-title">Customer Dashboard</h1>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="material-symbols-outlined search-icon" data-icon="search">search</span>
              <input className="search-input" placeholder="SEARCH PRODUCTS..." type="text" />
            </div>

            <div className="topbar-actions">
              <button className="action-btn">
                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              </button>
              <button className="action-btn">
                <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
              </button>
              <div className="action-divider"></div>
              <Link to="/profile" className="topbar-profile-btn">
                <div className="topbar-avatar" style={{ backgroundColor: '#7c3aed', color: '#fff' }}>RM</div>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2 className="welcome-title">Good morning, Reshma</h2>
            <p className="welcome-subtitle">Welcome to your customer dashboard. Track your product purchases and warranty coverage all in one place.</p>
          </section>

          {/* KPI Cards Row */}
          <div className="kpi-grid">
            {/* KPI 1 */}
            <div className="kpi-card">
              <p className="kpi-title">My Purchases</p>
              <div className="kpi-data">
                <span className="kpi-value">14</span>
                <span className="kpi-trend trend-up">
                  <span className="material-symbols-outlined trend-icon" data-icon="trending_up">trending_up</span>
                  +3 this month
                </span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="kpi-card">
              <p className="kpi-title">Active Warranties</p>
              <div className="kpi-data">
                <span className="kpi-value">9</span>
                <span className="kpi-trend trend-up">
                  <span className="material-symbols-outlined trend-icon" data-icon="shield">shield</span>
                  Protected
                </span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="kpi-card">
              <p className="kpi-title">Expiring Soon</p>
              <div className="kpi-data">
                <span className="kpi-value">2</span>
                <span className="kpi-trend trend-pending">
                  <span className="material-symbols-outlined trend-icon" data-icon="pending">pending</span>
                  30 days
                </span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="kpi-card">
              <p className="kpi-title">Open Claims</p>
              <div className="kpi-data">
                <span className="kpi-value">1</span>
                <span className="material-symbols-outlined kpi-large-icon" data-icon="assignment_late" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
              </div>
            </div>
          </div>

          <div className="dashboard-tables-grid">
            {/* Recent Purchases Table */}
            <section className="dashboard-table-section">
              <div className="section-header">
                <h3 className="section-title">Recent Purchases</h3>
                <button className="btn-view-archive">View All</button>
              </div>
              <div className="table-wrapper">
                <table className="po-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Warranty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="po-number">ORD-4821</td>
                      <td className="po-vendor">Samsung TV 55"</td>
                      <td className="po-date">Oct 20, 2023</td>
                      <td className="po-amount">$1,200.00</td>
                      <td><span className="status-badge status-approved">Active</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">ORD-4799</td>
                      <td className="po-vendor">Dell Laptop XPS 15</td>
                      <td className="po-date">Oct 10, 2023</td>
                      <td className="po-amount">$2,450.00</td>
                      <td><span className="status-badge status-approved">Active</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">ORD-4765</td>
                      <td className="po-vendor">Sony Headphones WH-1000</td>
                      <td className="po-date">Sep 28, 2023</td>
                      <td className="po-amount">$380.00</td>
                      <td><span className="status-badge status-pending">Expiring</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">ORD-4701</td>
                      <td className="po-vendor">iPhone 15 Pro</td>
                      <td className="po-date">Sep 15, 2023</td>
                      <td className="po-amount">$1,099.00</td>
                      <td><span className="status-badge status-approved">Active</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Warranty Status Section */}
            <section className="staff-overview-section">
              <div className="section-header">
                <h3 className="section-title">Warranty Status</h3>
                <button className="btn-icon">
                  <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                </button>
              </div>
              <div className="staff-list">
                <div className="staff-card">
                  <div className="staff-avatar avatar-eb">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>tv</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">Samsung TV 55"</h4>
                    <p className="staff-role">Expires: Oct 20, 2024 · 2-Year Plan</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-active">Active</span>
                    <button className="btn-text">Claim</button>
                  </div>
                </div>

                <div className="staff-card">
                  <div className="staff-avatar avatar-eb">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>laptop</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">Dell XPS 15</h4>
                    <p className="staff-role">Expires: Oct 10, 2025 · 2-Year Plan</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-active">Active</span>
                    <button className="btn-text">Claim</button>
                  </div>
                </div>

                <div className="staff-card inactive-staff">
                  <div className="staff-avatar avatar-sc">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>headphones</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">Sony WH-1000XM5</h4>
                    <p className="staff-role">Expires: Nov 02, 2023 · 1-Year Plan</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>Expiring</span>
                    <button className="btn-text">Renew</button>
                  </div>
                </div>

                <button className="btn-manage-all-staff">
                  View All Warranties
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Background detail */}
        <div className="dashboard-bg-glow"></div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
