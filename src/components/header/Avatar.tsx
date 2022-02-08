import React from 'react';
import avatarUrl from '../../assets/image-avatar.png';

function Avatar() {
  return (
    <div className="">
      <img className="w-6" src={avatarUrl} alt="avatar" />
    </div>
  );
}

export default Avatar;
