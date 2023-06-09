import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from "../ProfileCard/ProfileCard"
import FollowersCard from "../FollowersCard/FollowersCard"
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
