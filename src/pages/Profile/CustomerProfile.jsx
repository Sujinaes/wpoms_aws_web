import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { profileService } from '../../services/profileService';

const CustomerProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        console.log(userId)
        if (userId) {
          const data = await profileService.getCustomerProfile(userId);
          setProfileData(data);
        }
      } catch (err) {
        console.error("Error fetching customer profile:", err);
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
                <h2 className="user-name-large">{profileData?.customerName || "Reshma M"}</h2>
                <span className="role-badge">Customer</span>
              </div>
              <p className="user-email">{profileData?.customerEmail || "reshma.m@example.com"}</p>
            </div>
          </section>

          {/* Settings Grid */}


          {/* Centered Column: Customer Info */}
          <div className="settings-card">
            <div className="card-header">
              <h3 className="card-title">Personal Information</h3>
              <span className="material-symbols-outlined card-icon">person</span>
            </div>

            <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Customer Name</label>
                  <input className="form-input" type="text" defaultValue={profileData?.customerName || "Reshma M"} />
                </div>

                <div className="form-group">
                  <label className="form-label">Customer Email</label>
                  <input className="form-input" type="email" defaultValue={profileData?.customerEmail || "reshma.m@example.com"} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" defaultValue={profileData?.phoneNo || "+91 98765 43210"} />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input className="form-input" type="date" defaultValue={profileData?.dateOfBirth || "1995-05-15"} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Contact Preference</label>
                <input className="form-input" type="text" defaultValue={profileData?.contactPreference || "email"} />
              </div>

              <div className="form-group">
                <label className="form-label">Shipping Address</label>
                <textarea className="form-input form-textarea" rows="3" defaultValue={profileData?.shippingAddress || "42, Tech Park Avenue\nBangalore, Karnataka"}></textarea>
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

export default CustomerProfile;
