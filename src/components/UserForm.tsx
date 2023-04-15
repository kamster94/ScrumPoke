'use client';

import React from 'react';
import _ from 'lodash';
import TextInputWithLabel from '@/components/TextInputWithLabel';
import useUser from '@/hooks/useUser';
import RadioInputWithLabel from '@/components/RadioInputWithLabel';
import useSiteProperties from '@/hooks/useSiteProperties';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Container from '@/components/Container';

interface Props {
}

const UserForm = (props: Props) => {
  const { usernameForm, avatarForm, updateUser } = useUser();
  const { siteProperties } = useSiteProperties();

  return (
    <Container className="w-96">
      <div className="flex flex-col gap-4">
        <TextInputWithLabel
          value={usernameForm.username}
          setValue={usernameForm.setUsername}
        >
          Username
        </TextInputWithLabel>
        <span className="label-text">Avatar</span>
        <RadioInputWithLabel
          checked={avatarForm.avatar === ''}
          onChange={() => avatarForm.setAvatar('')}
          labelClassName="relative"
        >
          <span className="text-xs font-thin absolute top-[-1.5em] w-full">No avatar</span>
          <Avatar image="" username={usernameForm.username} className="block" />
        </RadioInputWithLabel>
        {_.map(siteProperties.avatars, (avatar) => {
          return (
            <RadioInputWithLabel
              checked={avatarForm.avatar === avatar.path}
              onChange={() => avatarForm.setAvatar(avatar.path)}
              labelClassName="relative"
            >
              <span className="text-xs font-thin absolute top-[-1.5em] w-full">{avatar.name}</span>
              <Avatar image={avatar.path} username="" className="block" />
            </RadioInputWithLabel>
          );
        })}

        <Button className="btn-primary w-fit place-self-center" onClick={() => updateUser()}>Save changes</Button>
      </div>
    </Container>
  );
};

export default UserForm;
