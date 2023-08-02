import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage!: Storage

  constructor() {
    this.storage = window.localStorage;
  }

  getValue<T>(key: string): T {
    const data = JSON.parse(this.storage[key]);
    return data;
  }

  setValue(key: string, value: any): void {
    if(value){
      this.storage[key] = JSON.stringify(value);
    }
  }
}
