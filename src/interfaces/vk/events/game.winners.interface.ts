import { EventType } from '../../../enums';
import { WinnerInterface } from '../helpers/winner.interface';

export interface GameWinnersInterface {
    type: EventType.WINNERS;
    owner_id: number;
    video_id: number;
    users: WinnerInterface[];
    prize: number;
    winners_num: number;
    version: number;
}
