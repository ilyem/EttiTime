export enum EVENTS {
  LECTURE = "lecture",
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
  lecture?: {
    nr: number,
    title: string,
    attachments: Attachment[]
  }
  starts: {
    hour: number,
    minutes: number
  };
  ends: {
    hour: number,
    minutes: number
  }
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
