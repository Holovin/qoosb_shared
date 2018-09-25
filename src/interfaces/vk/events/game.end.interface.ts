import { EventType } from '../../../enums';
import { CommonEventInterface } from './common.event.interface';

export interface GameEndInterface extends CommonEventInterface {
    type: EventType.GAME_END;
}
