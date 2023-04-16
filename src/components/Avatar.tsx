import React from 'react';
import Image from 'next/image';

interface Props {
  image: string;
  username: string;
  className?: string;
}

const Avatar = ({ image, username, className }: Props) => {
  const usernameInitial = username === ''
    ? '?'
    : username.charAt(0).toUpperCase();

  const placeholderAvatar = (
    <div className={`avatar placeholder ${username === '' ? '' : 'tooltip tooltip-left'} ${className ?? ''}`} data-tip={username}>
      <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
        <span className='text-3xl'>{usernameInitial}</span>
      </div>
    </div>
  );

  if (image === '') {
    return placeholderAvatar;
  }

  return (
    <div className={`avatar ${username === '' ? '' : 'tooltip tooltip-left'} ${className ?? ''}`} data-tip={username}>
      <div className='w-12 rounded-full'>
        <Image src={image} alt='user avatar' height={48} width={48}/>
      </div>
    </div>
  );
};

export default Avatar;
