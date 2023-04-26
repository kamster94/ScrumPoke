import { NextRequest } from 'next/server';
import SocketServer from '@/socket/SocketServer';
import { Room } from '@/models/Server';

export async function POST(request: NextRequest) {
  const room = await request.json() as Room;
  const socketServer = SocketServer.getInstance();
  const existing = socketServer.getRoomById(room.id);
  if (existing) {
    return new Response('Room with this id already exists', {
      status: 409,
    });
  }
  socketServer.addRoom(room);

  return new Response('Room created', {
    status: 201,
  });
}
