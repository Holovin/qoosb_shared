import { CommonEventInterface } from './common.event.interface';
import { EventType } from '../../../enums';

export interface GameEndInterface extends CommonEventInterface {
    type: EventType.GAME_END;
}
