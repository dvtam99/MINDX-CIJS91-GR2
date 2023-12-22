import React from "react";
import "./Profile.css";
const Profile = (props) => {
  const { imgUrl, name } = props;
  const getName = () => name;

  return (
    <div className="profile">
      <div>
        <img className="img-profile" src={imgUrl} alt="avatar" />
        <div style={{ textAlign: "center", color: "white" }}>{getName()}</div>
      </div>
    </div>
  );
};

export default Profile;
