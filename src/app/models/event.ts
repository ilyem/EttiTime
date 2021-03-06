export enum EventType {
  Course = "course",
  Seminar = "seminar",
  Labroatory = "laboratory",
  Project = "project",
}
export class Event {
  name: string;
  abbreviation: string;
  type: EventType;
  teacher: string;
  day: string;
  lesson?: Lesson
  starts: Time;
  ends: Time;
  classroom?: string;
  attachments: Attachment[];
}
export class Attachment {
  name: string;
  link: string
}
export class Lesson {
  nr: number;
  title: string;
  description?: string;
  attachments: Attachment[]
}
export class Time {
  hour: number;
  minutes: number
}