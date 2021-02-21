import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private ENDPOINT = "https://api.publicapis.org";
  private GET_CATEGORIES = "/categories"
  constructor(private http: HttpClient) {}
  public sendGetRequest(){
    return this.http.get(this.ENDPOINT + this.GET_CATEGORIES);
  }
}
