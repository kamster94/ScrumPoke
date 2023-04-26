'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import { SocketUser } from '@/models/Server';
import useSocket from '@/hooks/useSocket';
import Loader from '@/components/Loader';
import Container from '@/components/Container';

export default function JoinRoom({
  params,
}: {
  params: { id: string };
}) {
  const roomId = params.id;
  const { currentUser } = useUser();
  const { socket, joinRoom } = useSocket();
  const router = useRouter();
  const [isValidRoom, setIsValidRoom] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function handleJoin() {
      const response = await fetch(`/api/room/${roomId}`, {
        method: 'GET',

      });
      if (response.ok) {
        toast.success(`Joined room '${roomId}'`);
        setIsValidRoom(true);
      } else {
        toast.error(`Room with name '${roomId}' was not found`);
        setIsValidRoom(false);
        router.push('/room/join');
      }
    }

    handleJoin();
  }, [roomId]);

  useEffect(() => {
    if (currentUser && isValidRoom) {
      socket.on('userJoined', (room: string, user: SocketUser) => {
        console.log(`${user.username} joined room ${room}`);
        setIsLoaded(true);
      });
      joinRoom(roomId, currentUser);
    }
  }, [currentUser, isValidRoom]);

  if (!isLoaded) {
    return (
      <Container>
        <Loader size='lg'/>
      </Container>
    );
  }

  return <h1>{params.id}</h1>;
}
