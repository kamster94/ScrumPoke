import { Server as NetServer, Socket } from 'net';
import { Server as SocketIOServer } from 'socket.io';
import { User } from '@/models/User';
import { NextApiResponse } from 'next';

export interface Room {
  id: string;
  hostId: string;
}

export type SocketUser = User & {
  userId: string;
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
