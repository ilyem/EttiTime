import { EventType, Lesson } from './event';

export default class Subject {
    name: string;
    type: EventType;
    description: string;
    teacher: string;
    lessons: Lesson[];
    groups: string[];
}
