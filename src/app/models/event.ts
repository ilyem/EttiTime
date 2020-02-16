export enum EVENTS {
  LESSON = "lesson",
  SEMINAR = "seminar",
  LABROATORY = "laboratory",
  PROJECT = "project",
  EXAM = "exam"
}
export class Event {
  name: string;
  abbreviation: string;
  type: string;
  teacher: string;
  day: string;
  lesson?: Lesson
  starts: Time;
  ends: Time;
  classroom?: string;
  attachments: Attachment[];
  exam?: {
    attachments: Attachment[]
  }
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