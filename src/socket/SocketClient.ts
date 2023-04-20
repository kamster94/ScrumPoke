import { io, Socket } from 'socket.io-client';
import { SocketUser } from '@/models/Server';

export class SocketClient {
  // eslint-disable-next-line no-use-before-define
  private static instance: SocketClient;

  // @ts-ignore
  private socket: Socket;

  private constructor() {
    this.socket = io({
      path: '/api/socket',
    });
    this.socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', this.socket.id);
    });
    this.socket.on('userJoined', (roomId: string, user: SocketUser) => {
      console.log(`${user.username} joined room ${roomId} `);
    });
  }

  public static getInstance(): SocketClient {
    if (!SocketClient.instance) {
      SocketClient.instance = new SocketClient();
    }

    return SocketClient.instance;
  }

  public getSocket() {
    return this.socket;
  }

  public connect() {
    this.socket.connect();
  }

  public disconnect() {
    this.socket.disconnect();
  }
}
