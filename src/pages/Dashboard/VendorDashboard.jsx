import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const VendorDashboard = () => {
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
          <Link className="nav-item nav-item-active" to="/vendor/dashboard">
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
          <button className="btn-new-entry gold-gradient">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            New Order
          </button>

          <Link to="/profile" className="user-profile-link">
            <div className="vendor-avatar-initials">RK</div>
            <div className="user-info">
              <p className="user-name">Rahul Kumar</p>
              <p className="user-role">Vendor</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <h1 className="topbar-title">Vendor Dashboard</h1>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="material-symbols-outlined search-icon" data-icon="search">search</span>
              <input className="search-input" placeholder="SEARCH ORDERS..." type="text" />
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
                <div className="topbar-avatar">RK</div>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2 className="welcome-title">Good morning, Rahul</h2>
            <p className="welcome-subtitle">Here's your vendor activity summary. All active purchase orders and shipment statuses are up to date.</p>
          </section>

          {/* KPI Cards Row */}
          <div className="kpi-grid">
            {/* KPI 1 */}
            <div className="kpi-card">
              <p className="kpi-title">Active Purchase Orders</p>
              <div className="kpi-data">
                <span className="kpi-value">28</span>
                <span className="kpi-trend trend-up">
                  <span className="material-symbols-outlined trend-icon" data-icon="trending_up">trending_up</span>
                  +8%
                </span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="kpi-card">
              <p className="kpi-title">Pending Deliveries</p>
              <div className="kpi-data">
                <span className="kpi-value">7</span>
                <span className="kpi-trend trend-pending">
                  <span className="material-symbols-outlined trend-icon" data-icon="pending">pending</span>
                  In Transit
                </span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="kpi-card">
              <p className="kpi-title">Total Revenue (Oct)</p>
              <div className="kpi-data">
                <span className="kpi-value">$84K</span>
                <span className="kpi-trend trend-up">
                  <span className="material-symbols-outlined trend-icon" data-icon="trending_up">trending_up</span>
                  +15%
                </span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="kpi-card">
              <p className="kpi-title">Warranty Claims</p>
              <div className="kpi-data">
                <span className="kpi-value">3</span>
                <span className="material-symbols-outlined kpi-large-icon" data-icon="shield" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
            </div>
          </div>

          <div className="dashboard-tables-grid">
            {/* Recent Purchase Orders Table */}
            <section className="dashboard-table-section">
              <div className="section-header">
                <h3 className="section-title">My Purchase Orders</h3>
                <button className="btn-view-archive">View All</button>
              </div>
              <div className="table-wrapper">
                <table className="po-table">
                  <thead>
                    <tr>
                      <th>PO Number</th>
                      <th>Manufacturer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="po-number">PO-90011</td>
                      <td className="po-vendor">ABC Pvt Ltd</td>
                      <td className="po-date">Oct 25, 2023</td>
                      <td className="po-amount">$6,800.00</td>
                      <td><span className="status-badge status-pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-90008</td>
                      <td className="po-vendor">TechManuf Inc</td>
                      <td className="po-date">Oct 22, 2023</td>
                      <td className="po-amount">$14,200.00</td>
                      <td><span className="status-badge status-approved">Approved</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-89997</td>
                      <td className="po-vendor">Prime Motors</td>
                      <td className="po-date">Oct 18, 2023</td>
                      <td className="po-amount">$3,500.00</td>
                      <td><span className="status-badge status-approved">Approved</span></td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-89990</td>
                      <td className="po-vendor">GlobalTech</td>
                      <td className="po-date">Oct 14, 2023</td>
                      <td className="po-amount">$9,750.00</td>
                      <td><span className="status-badge status-rejected">Rejected</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Shipment Tracker Section */}
            <section className="staff-overview-section">
              <div className="section-header">
                <h3 className="section-title">Shipment Tracker</h3>
                <button className="btn-icon">
                  <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                </button>
              </div>
              <div className="staff-list">
                <div className="staff-card">
                  <div className="staff-avatar avatar-eb">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>local_shipping</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">PO-90008 Shipment</h4>
                    <p className="staff-role">ETA: Oct 30, 2023 · TechManuf Inc</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label" style={{ backgroundColor: '#dbeafe', color: '#1d4ed8' }}>In Transit</span>
                    <button className="btn-text">Track</button>
                  </div>
                </div>

                <div className="staff-card">
                  <div className="staff-avatar avatar-eb">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>local_shipping</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">PO-89997 Shipment</h4>
                    <p className="staff-role">Delivered: Oct 22, 2023 · Prime Motors</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-active">Delivered</span>
                    <button className="btn-text">View</button>
                  </div>
                </div>

                <div className="staff-card inactive-staff">
                  <div className="staff-avatar avatar-sc">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>local_shipping</span>
                  </div>
                  <div className="staff-info">
                    <h4 className="staff-name">PO-90011 Shipment</h4>
                    <p className="staff-role">Awaiting dispatch · ABC Pvt Ltd</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-inactive">Awaiting</span>
                    <button className="btn-text">Details</button>
                  </div>
                </div>

                <button className="btn-manage-all-staff">
                  View All Shipments
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

export default VendorDashboard;
