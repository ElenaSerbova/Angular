import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  write(message: string){
    console.log(message);
  }
}
