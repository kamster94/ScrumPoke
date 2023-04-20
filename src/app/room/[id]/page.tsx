'use client';

import { SocketClient } from '@/socket/SocketClient';
import { useEffect } from 'react';

export default function JoinRoom({
  params,
}: {
  params: { id: string };
}) {
  useEffect(() => {
    const socketClient = SocketClient.getInstance();
    const socket = socketClient.getSocket();
  }, []);
  return <h1>{params.id}</h1>;
}
