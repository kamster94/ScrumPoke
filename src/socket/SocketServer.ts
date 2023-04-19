import _ from 'lodash';
import { Room } from '@/models/Server';

class SocketServer {
  // eslint-disable-next-line no-use-before-define
  private static instance: SocketServer;

  private rooms: { [roomId: string]: Room };

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
}

export default SocketServer;
