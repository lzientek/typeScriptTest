import { Room } from './Room';

export class User {
    public _id: string;
    public pseudo: string;
    public spectator: boolean;
    public room: Room;
}
