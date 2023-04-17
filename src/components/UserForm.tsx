'use client';

import React from 'react';
import _ from 'lodash';
import TextInputWithLabel from '@/components/TextInputWithLabel';
import useUser from '@/hooks/useUser';
import RadioInputWithLabel from '@/components/RadioInputWithLabel';
import useSiteProperties from '@/hooks/useSiteProperties';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import FormContainer from '@/components/FormContainer';

const UserForm = () => {
  const { usernameForm, avatarForm, updateUser } = useUser();
  const { avatars } = useSiteProperties();

  return (
    <FormContainer>
      <TextInputWithLabel
        value={usernameForm.username}
        setValue={usernameForm.setUsername}
      >
        Username
      </TextInputWithLabel>
      <span className='label label-text'>Avatar</span>
      <RadioInputWithLabel
        checked={avatarForm.avatar === ''}
        onChange={() => avatarForm.setAvatar('')}
        labelClassName='relative'
      >
        <span className='text-xs font-thin absolute top-[-1.5em] w-full'>No avatar</span>
        <Avatar image='' username={usernameForm.username} className='block' />
      </RadioInputWithLabel>
      {_.map(avatars, (avatar) => {
        return (
          <RadioInputWithLabel
            checked={avatarForm.avatar === avatar.path}
            onChange={() => avatarForm.setAvatar(avatar.path)}
            labelClassName='relative'
          >
            <span className='text-xs font-thin absolute top-[-1.5em] w-full'>{avatar.name}</span>
            <Avatar image={avatar.path} username='' className='block' />
          </RadioInputWithLabel>
        );
      })}

      <Button className='btn-primary w-fit place-self-center' onClick={() => updateUser()}>Save changes</Button>
    </FormContainer>
  );
};

export default UserForm;
