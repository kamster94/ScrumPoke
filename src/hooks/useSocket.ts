import { SocketClient } from '@/socket/SocketClient';
import { SocketUser } from '@/models/Server';
import { User } from '@/models/User';

function useSocket() {
  const socketClient = SocketClient.getInstance();
  const socket = socketClient.getSocket();

  function joinRoom(roomId: string, user: User) {
    const socketUser: SocketUser = { ...user, userId: socket.id };
    socket.emit('joinRoom', roomId, socketUser);
  }

  return {
    socket,
    joinRoom,
  };
}

export default useSocket;
