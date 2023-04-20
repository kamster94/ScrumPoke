import _ from 'lodash';
import { Server as SocketIOServer } from 'socket.io';
import { Server as NetServer } from 'net';
import { Room, SocketUser } from '@/models/Server';

class SocketServer {
  // eslint-disable-next-line no-use-before-define
  private static instance: SocketServer;

  private rooms: { [roomId: string]: Room };

  private io?: SocketIOServer;

  private constructor() {
    this.rooms = {};
  }

  public static getInstance(): SocketServer {
    if (!SocketServer.instance) {
      SocketServer.instance = new SocketServer();
    }

    return SocketServer.instance;
  }

  public getRooms() {
    return this.rooms;
  }

  public addRoom(room: Room) {
    this.rooms = {
      ...this.rooms,
      [room.id]: room,
    };
  }

  public removeRoom(roomId: string) {
    this.rooms = _.omit(this.rooms, roomId);
  }

  public getRoomById(roomId: string) {
    return this.rooms[roomId];
  }

  public getIO(httpServer: NetServer): SocketIOServer {
    if (!this.io) {
      this.io = new SocketIOServer(httpServer as any, {
        path: '/api/socket',
      });
      this.io.on('connection', (socket) => {
        socket.on('join', (roomId: string, user: SocketUser) => {
          socket.join(roomId);
          socket.to(roomId).emit('userJoined', roomId, user);
        });
      });
    }

    return this.io;
  }
}

export default SocketServer;
