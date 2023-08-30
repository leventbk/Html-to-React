import React from "react";

function Profile() {
  const fistName = "Amy";
  const lastName = "Mansell";
  const profileImage = "./profile-hex.png";
  return (
    <aside>
    <div className="profile">
      <img className="profile__image" src={profileImage}/>
    </div>
    <br />
    <div className="profile__name">
      <h2><span className="profile--bold">{fistName}</span> {lastName}</h2>
    </div>
  </aside>
  );
}

export default Profile;