export enum UserType {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}
export class User {
  name: string;
  email: string;
  type: UserType;
  group: string
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