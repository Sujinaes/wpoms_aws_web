import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { profileService } from '../../services/profileService';

const ManufacturerProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await profileService.getManufacturerProfile(userId);
          setProfileData(data);
        }
      } catch (err) {
        console.error("Error fetching manufacturer profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="profile-wrapper"><div className="profile-main"><div className="profile-container" style={{ padding: '2rem' }}>Loading profile...</div></div></div>;
  }

  return (
    <div className="profile-wrapper">
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
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#fff' }}>account_circle</span>
              </div>
            </div>

            <div className="hero-info">
              <div className="hero-title-row">
                <h2 className="user-name-large">{profileData?.companyName || "Manufacturer Enterprises"}</h2>
                <span className="role-badge">Manufacturer</span>
              </div>
              <p className="user-email">{profileData?.companyEmail || "contact@manufacturer.com"}</p>
            </div>
          </section>


          {/* Company Info */}
          <div className="settings-card">
            <div className="card-header">
              <h3 className="card-title">Company Information</h3>
              <span className="material-symbols-outlined card-icon">store</span>
            </div>

            <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input className="form-input" type="text" defaultValue={profileData?.companyName || "Manufacturer Enterprises"} />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Email</label>
                  <input className="form-input" type="email" defaultValue={profileData?.companyEmail || "contact@manufacturer.com"} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Phone</label>
                  <input className="form-input" type="tel" defaultValue={profileData?.phone || "+1 (555) 012-3456"} />
                </div>

                <div className="form-group">
                  <label className="form-label">GST Number</label>
                  <input className="form-input" type="text" defaultValue={profileData?.gstNumber || "GSTIN123456789"} />
                </div>
              </div>

              <button className="btn-save gold-gradient" type="button">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManufacturerProfile;
