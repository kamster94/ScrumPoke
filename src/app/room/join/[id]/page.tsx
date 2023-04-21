'use client';

import { SocketClient } from '@/socket/SocketClient';
import { useEffect } from 'react';
import useUser from '@/hooks/useUser';
import { SocketUser } from '@/models/Server';

export default function JoinRoom({
  params,
}: {
  params: { id: string };
}) {
  const roomId = params.id;
  const { currentUser } = useUser();
  useEffect(() => {
    const socketClient = SocketClient.getInstance();
    const socket = socketClient.getSocket();
    const socketUser: SocketUser = { ...currentUser, userId: socket.id };
    socket.on('userJoined', (room: string, user: SocketUser) => {
      console.log(`${user.username} joined room ${room}`);
    });
    setTimeout(() => {
      socket.emit('joinRoom', roomId, socketUser);
    }, 50);
  }, []);
  return <h1>{params.id}</h1>;
}
