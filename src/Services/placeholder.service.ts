import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor() { private httpService: HttpClient }

  async get(): Promise <any> {

  }
}
