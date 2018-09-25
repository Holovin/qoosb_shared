import { CommonEventInterface } from './common.event.interface';
import { UserInterface } from '../helpers';

export interface CommentInterface extends CommonEventInterface {
    comment: {
        id: number;
        from_id: number;
        date: number;
        text: string;
    };
    user: UserInterface;
}
