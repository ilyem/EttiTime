import { Injectable } from '@angular/core';
import { Time } from '../models/date';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
   getTimeInterval(start: Time, end: Time): number {
    return ((end.hour * 60 + end.minutes) - (start.hour * 60 + start.minutes)) / 60;
  }
}
