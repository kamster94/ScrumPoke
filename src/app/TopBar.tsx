'use client';

import React from 'react';
import useUser from '@/hooks/useUser';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import useSiteProperties from '@/hooks/useSiteProperties';
import Link from 'next/link';
import ThemeSwitch from '@/app/ThemeSwitch';

const TopBar = () => {
  const { currentUser } = useUser();
  const { siteName } = useSiteProperties();

  return (
    <div className='navbar bg-base-100 fixed top-0 left-0 w-full z-20 shadow'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7'/>
            </svg>
          </label>
          <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li><Link href='/'>Homepage</Link></li>
            <li><Link href='/room/create'>Create room</Link></li>
            <li><Link href='/'>Join room</Link></li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Button className='btn-ghost normal-case text-xl' link='/'>{siteName}</Button>
      </div>
      <div className='navbar-end space-x-5'>
        <Button className='btn-ghost btn-circle'>
          <ThemeSwitch />
        </Button>
        <Button className='btn-ghost btn-circle' link='/user'>
          <Avatar username={currentUser.username} image={currentUser.avatar} />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
