import { EventType } from '../../../enums';

export interface CommonEventInterface {
    type: EventType;
    owner_id: number;
    video_id: number;
    version: number;
}
