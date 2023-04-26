'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Container from '@/components/Container';
import TextInputWithLabel from '@/components/TextInputWithLabel';
import Button from '@/components/Button';
import FormContainer from '@/components/FormContainer';
import { Room } from '@/models/Server';
import { useRouter } from 'next/navigation';

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

export default function CreateRoom() {
  const [newRoomName, setNewRoomName] = useState('');
  const router = useRouter();

  const defaultRoomName = generateId(10);

  async function handleCreate() {
    const roomName = newRoomName.trim().length ? newRoomName.trim() : defaultRoomName;
    const room: Room = {
      id: roomName,
      hostId: 'undefined',
    };
    const response = await fetch('/api/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(room),
    });
    if (response.ok) {
      toast.success(`Successfully created room '${roomName}'`);
      setTimeout(() => {
        router.push(`/room/join/${roomName}`);
      }, 50);
    } else {
      toast.error(`Failed to create a room '${roomName}'. ${response.body}.`);
    }
  }

  return (
    <Container className='text-lg leading-10'>
      <p>Create a room</p>
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
    </Container>
  );
}
