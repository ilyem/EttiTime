export class Event {
  name: string;
  abbreviation: string;
  type: string;
  teacher: string;
  day: string;
  starts: {
    hour: number,
    minutes: number
  };
  ends: {
    hour: number,
    minutes: number
  }
  attachments: Attachment[];
  lecture?: {
    nr: number,
    title: string,
    attachments: Attachment[]
  }
}
export class Attachment {
  name: string;
  link: string
}
