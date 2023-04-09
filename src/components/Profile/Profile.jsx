import React from 'react';
import Header from '../Header/Header';
import FriendsList from '../Friends/FriendsList';
import ChallengeInvitation from '../Challenge/ChallengeInvitation';

const Profile = () => {
  return (
    <div>
      <Header />
      <div className='profile-container'>
        <div className='friends-item'>
          <FriendsList />
        </div>
        <div className='challenge-invitation-item'>
          <ChallengeInvitation />
        </div>
      </div>
    </div>
  );
};

export default Profile;
