import SocketServer from '@/socket/SocketServer';

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const roomId = params.id;
  if (!roomId) {
    return new Response(null, {
      status: 400,
      statusText: 'Id cannot be null',
    });
  }
  const socketServer = SocketServer.getInstance();
  const existing = socketServer.getRoomById(roomId);
  if (existing) {
    return new Response(JSON.stringify(existing), {
      status: 200,
      statusText: 'Room with this id exists',
    });
  }

  return new Response(null, {
    status: 404,
    statusText: 'Cannot find room with specified id',
  });
}
