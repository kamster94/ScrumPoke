'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Container from '@/components/Container';
import FormContainer from '@/components/FormContainer';
import TextInputWithLabel from '@/components/TextInputWithLabel';
import Button from '@/components/Button';

export default function JoinRoomForm() {
  const router = useRouter();
  const [roomName, setRoomName] = useState('');

  async function handleJoin() {
    const response = await fetch(`/api/room/${roomName}`, {
      method: 'GET',

    });
    if (response.ok) {
      toast.success(`Joining room '${roomName}'`);
      router.push(`/room/join/${roomName}`);
    } else {
      toast.error(`Room with name '${roomName}' was not found`);
      setRoomName('');
    }
  }

  return (
    <Container className='text-lg leading-10'>
      <p>Join a room using name received from the host</p>
      <FormContainer>
        <TextInputWithLabel
          value={roomName}
          setValue={setRoomName}
        >
          Room name
        </TextInputWithLabel>
        <Button className='btn-primary w-fit place-self-center' onClick={() => handleJoin()}>Join</Button>
      </FormContainer>
    </Container>
  );
}
