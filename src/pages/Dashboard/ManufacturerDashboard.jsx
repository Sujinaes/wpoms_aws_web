import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const ManufacturerDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* SideNavBar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined logo-icon" data-icon="verified_user">verified_user</span>
            WPOMS
          </div>
          <p className="sidebar-subtitle">Manufacturer Portal</p>
        </div>
        <nav className="sidebar-nav">
          <Link className="nav-item nav-item-active" to="/manufacturer/dashboard">
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
          <button className="btn-new-entry gold-gradient">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            New Entry
          </button>

          <Link to="/profile" className="user-profile-link">
            <img
              alt="WPOMS Gold Logo"
              className="user-avatar-img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGLs_PCOIQaUib2YE9U4Ma5yE694pVVq7RRsi2bYCgbs4iDSAs5oNkEZ0TDBtnGSJHj1LHRRfjjf2rEuBjgD66oHXCXPWKicN5-VWsmOC8c7BEntqYP80IPjrGXoreU9zotXU_BPebf1WpPurZiyRDCujcIYfb0FFuHKUOWYwR5EZBKug-xzuLUNY7PiDleDDDoy8QE15cvkC7pWhdXejDmOGK-8fEYBoI-k8TpVHv9_6bQRPN-qpYb_BINw3zpTkjNK4r5U"
            />
            <div className="user-info">
              <p className="user-name">Alexander Cole</p>
              <p className="user-role">Manufacturer</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* TopAppBar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <h1 className="topbar-title">Manufacturer Dashboard</h1>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="material-symbols-outlined search-icon" data-icon="search">search</span>
              <input className="search-input" placeholder="SEARCH RECORDS..." type="text" />
            </div>

            <div className="topbar-actions">
              <button className="action-btn">
                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              </button>
              <button className="action-btn">
                <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
              </button>

              <div className="action-divider"></div>
              <button className="btn-create-new">
                Create New
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2 className="welcome-title">Good morning, Alexander</h2>
            <p className="welcome-subtitle">Your enterprise overview for today. All purchase orders and active warranties are synced and up to date.</p>
          </section>

          {/* KPI Cards Row */}
          <div className="kpi-grid">
            {/* KPI 1 */}
            <div className="kpi-card">
              <p className="kpi-title">Total Warranties</p>
              <div className="kpi-data">
                <span className="kpi-value">1,284</span>
                <span className="kpi-trend trend-up">
                  <span className="material-symbols-outlined trend-icon" data-icon="trending_up">trending_up</span>
                  +12%
                </span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="kpi-card">
              <p className="kpi-title">Active Purchase Orders</p>
              <div className="kpi-data">
                <span className="kpi-value">42</span>
                <span className="kpi-trend trend-pending">
                  <span className="material-symbols-outlined trend-icon" data-icon="pending">pending</span>
                  Pending
                </span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="kpi-card">
              <p className="kpi-title">Staff Members</p>
              <div className="kpi-data">
                <span className="kpi-value">18</span>
                <span className="kpi-status-text">
                  3 Departments
                </span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="kpi-card">
              <p className="kpi-title">Products Registered</p>
              <div className="kpi-data">
                <span className="kpi-value">312</span>
                <span
                  className="material-symbols-outlined kpi-large-icon"
                  data-icon="inventory"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inventory
                </span>
              </div>
            </div>
          </div>

          <div className="dashboard-tables-grid">
            {/* Recent Purchase Orders Table */}
            <section className="dashboard-table-section">
              <div className="section-header">
                <h3 className="section-title">Recent Purchase Orders</h3>
                <button className="btn-view-archive">View Archive</button>
              </div>
              <div className="table-wrapper">
                <table className="po-table">
                  <thead>
                    <tr>
                      <th>PO Number</th>
                      <th>Vendor</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="po-number">PO-88219</td>
                      <td className="po-vendor">Lumiere Dynamics</td>
                      <td className="po-date">Oct 24, 2023</td>
                      <td className="po-amount">$12,450.00</td>
                      <td>
                        <span className="status-badge status-pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-88215</td>
                      <td className="po-vendor">Titan Industries</td>
                      <td className="po-date">Oct 22, 2023</td>
                      <td className="po-amount">$8,200.00</td>
                      <td>
                        <span className="status-badge status-approved">Approved</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-88212</td>
                      <td className="po-vendor">Atlas Global</td>
                      <td className="po-date">Oct 21, 2023</td>
                      <td className="po-amount">$4,920.00</td>
                      <td>
                        <span className="status-badge status-rejected">Rejected</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="po-number">PO-88208</td>
                      <td className="po-vendor">Nexa Logistics</td>
                      <td className="po-date">Oct 20, 2023</td>
                      <td className="po-amount">$15,600.00</td>
                      <td>
                        <span className="status-badge status-approved">Approved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Staff Overview Section */}
            <section className="staff-overview-section">
              <div className="section-header">
                <h3 className="section-title">Staff Overview</h3>
                <button className="btn-icon">
                  <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                </button>
              </div>
              <div className="staff-list">
                {/* Staff Card 1 */}
                <div className="staff-card">
                  <div className="staff-avatar avatar-eb">EB</div>
                  <div className="staff-info">
                    <h4 className="staff-name">Eleanor Bennett</h4>
                    <p className="staff-role">Compliance Officer</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-active">Active</span>
                    <button className="btn-text">Edit</button>
                  </div>
                </div>

                {/* Staff Card 2 */}
                <div className="staff-card">
                  <div className="staff-avatar avatar-mw">MW</div>
                  <div className="staff-info">
                    <h4 className="staff-name">Marcus Wright</h4>
                    <p className="staff-role">Procurement Manager</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-active">Active</span>
                    <button className="btn-text">Edit</button>
                  </div>
                </div>

                {/* Staff Card 3 */}
                <div className="staff-card inactive-staff">
                  <div className="staff-avatar avatar-sc">SC</div>
                  <div className="staff-info">
                    <h4 className="staff-name">Sarah Chen</h4>
                    <p className="staff-role">Inventory Specialist</p>
                  </div>
                  <div className="staff-actions">
                    <span className="status-label status-inactive">Inactive</span>
                    <button className="btn-text">Edit</button>
                  </div>
                </div>

                <button className="btn-manage-all-staff">
                  Manage All Staff
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

export default ManufacturerDashboard;
