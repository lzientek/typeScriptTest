import { Card } from './Card';
import { User } from './User';

export class Room {
    public _id: string;
    public pseudo: string;
    public spectator: boolean;
    public users: User[];
    public cards: Card[];
}
