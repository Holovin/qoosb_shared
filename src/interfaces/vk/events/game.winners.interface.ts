import { WinnerInterface } from '../helpers';
import { EventType } from '../../../enums';

export interface GameWinnersInterface {
    type: EventType.WINNERS;
    owner_id: number;
    video_id: number;
    users: WinnerInterface[];
    prize: number;
    winners_num: number;
    version: number;
}
