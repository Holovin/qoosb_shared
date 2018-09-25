import { CommonEventInterface } from './common.event.interface';

export interface QuestionStartInterface extends CommonEventInterface {
    question: {
        id: number;
        text: string;
        answers: [
            {
                id: number;
                text: string;
            }
            ];
        time: null;
        number: number;
    };
}
