import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { profileService } from '../../services/profileService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const VendorProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await profileService.getVendorProfile(userId);
          setProfileData(data);
        } else {
          console.log("No userId found");
          toast.error("You are not logged in");
          navigate("/login");
        }

      } catch (err) {
        console.error("Error fetching vendor profile:", err);
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
                <h2 className="user-name-large">{profileData?.vendorName || "Rahul Kumar"}</h2>
                <span className="role-badge">Vendor</span>
              </div>
              <p className="user-email">{profileData?.vendorEmail || "vendor@alliance.com"}</p>
            </div>
          </section>
          {/* Vendor Info */}
          <div className="settings-card">
            <div className="card-header">
              <h3 className="card-title">Vendor Information</h3>
              <span className="material-symbols-outlined card-icon">local_shipping</span>
            </div>

            <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Vendor Name</label>
                  <input className="form-input" type="text" defaultValue={profileData?.vendorName || "Rahul Kumar"} />
                </div>

                <div className="form-group">
                  <label className="form-label">Vendor Email</label>
                  <input className="form-input" type="email" defaultValue={profileData?.vendorEmail || "vendor@alliance.com"} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" defaultValue={profileData?.phone || "+91 85934 93481"} />
                </div>

                <div className="form-group">
                  <label className="form-label">GST Number</label>
                  <input className="form-input" type="text" defaultValue={profileData?.gstNumber || "GSTIN987654321"} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Address</label>
                <textarea className="form-input form-textarea" rows="3" defaultValue={profileData?.address || "78, Harmony Road, Industrial Area\nMumbai, Maharashtra"}></textarea>
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

export default VendorProfile;
