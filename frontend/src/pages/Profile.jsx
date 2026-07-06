function Profile() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">My Account</p>
        <h1>Profile</h1>
        <p>Manage your account details and view order history.</p>
      </div>

      <div className="profile-grid">
        <div className="info-card">
          <h2>User Details</h2>
          <p>Name, email, and account settings will appear here after login.</p>
        </div>
        <div className="info-card">
          <h2>Order History</h2>
          <p>Your previous orders will appear here.</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
