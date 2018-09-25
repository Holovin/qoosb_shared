import { CommonEventInterface } from './common.event.interface';

export interface QuestionEndInterface extends CommonEventInterface {
    question: {
        text: string;
        answers: [
            {
                id: number;
                text: string;
                users_answered: number;
            }
            ];
        right_answer_id: number;
        id: number;
        is_first: boolean;
        is_last: boolean;
        number: number;
        sent_time: number;
        answer_set: boolean;
    };
    question_time: number;
}
