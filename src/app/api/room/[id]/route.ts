import SocketServer from '@/socket/SocketServer';

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const roomId = params.id;
  if (!roomId) {
    return new Response('Id cannot be null', {
      status: 400,
    });
  }
  const socketServer = SocketServer.getInstance();
  const existing = socketServer.getRoomById(roomId);
  if (existing) {
    return new Response(JSON.stringify(existing), {
      status: 200,
    });
  }

  return new Response('Cannot find room with specified id', {
    status: 404,
  });
}
