'use client';

import React, { useState } from 'react';
import FormContainer from '@/components/FormContainer';
import TextInputWithLabel from '@/components/TextInputWithLabel';
import Button from '@/components/Button';
import toast from 'react-hot-toast';

function generateId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const NewRoomForm = () => {
  const [newRoomName, setNewRoomName] = useState('');

  const defaultRoomName = generateId(10);

  function handleCreate() {
    const roomName = newRoomName.trim().length ? newRoomName.trim() : defaultRoomName;
    toast.success(`Successfully created room ${roomName}`);
  }

  return (
    <FormContainer>
      <TextInputWithLabel
        value={newRoomName}
        setValue={setNewRoomName}
        placeholder={defaultRoomName}
      >
        Room name <span className='italic'>(optional)</span>
      </TextInputWithLabel>
      <Button className='btn-primary w-fit place-self-center' onClick={() => handleCreate()}>Create</Button>
    </FormContainer>
  );
};

export default NewRoomForm;
