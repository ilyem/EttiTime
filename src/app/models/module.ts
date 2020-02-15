import { Lesson } from './event';

export default class Module {
    name: string;
    type: string;
    description: string;
    teacher: string;
    lessons: Lesson[];
    groups: string[];
}
