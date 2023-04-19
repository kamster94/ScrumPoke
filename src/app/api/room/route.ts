import { NextRequest } from 'next/server';
import SocketServer from '@/socket/SocketServer';
import { Room } from '@/models/Server';

export async function POST(request: NextRequest) {
  const room = await request.json() as Room;
  const roomManager = SocketServer.getInstance();
  const existing = roomManager.getRoomById(room.id);
  if (existing) {
    return new Response(null, {
      status: 409,
      statusText: 'Room with this id already exists',
    });
  }
  roomManager.addRoom(room);

  return new Response(null, {
    status: 201,
    statusText: 'Room created',
  });
}
