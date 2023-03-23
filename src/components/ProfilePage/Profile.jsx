import React from 'react';
import Avatar from '../Utility/Avatar';
import BannerCard from '../Utility/BannerCard';
import { useSelector } from "react-redux";

const Profile = () => {

  const authEmail = useSelector((state) => state.auth.currentUser.email)
  console.log(authEmail)
  const userData = useSelector((state) => state.user.value);
  // console.log(userData)

  return (
    <BannerCard user={userData}>

      <div className="poster-container">

        <div className="poster">
          <Avatar imageUrl="https://wallpaperaccess.com/full/4595683.jpg" size={100} />
        </div>

        <div className="large-card-details-1">
          <h3>{userData.name}</h3>
          <p className="info">
            {userData.bio}
          </p>
        </div>
        <div className="large-card-details-2">
          <span className="status">Finished</span>
          <span className="volume">{userData.completed}</span>
          <br />
          <ul>
            <li>{userData.city}</li>
            <li>{userData.country}</li>
            <li>{authEmail}</li>
          </ul>
          <br />
        </div>
        <div className="large-card-details-3">
          <button className="readnow">Create Now</button>
          <button className='readnow'>Edit Profile</button>
        </div>
      </div>

    </BannerCard>
  )
}

export default Profile
