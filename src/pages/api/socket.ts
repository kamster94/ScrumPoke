import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '@/models/Server';
import SocketServer from '@/socket/SocketServer';

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  const socketServer = SocketServer.getInstance();
  const io = socketServer.getIO(res.socket.server);
  if (!res.socket.server.io) {
    res.socket.server.io = io;
  }

  res.end();
};
