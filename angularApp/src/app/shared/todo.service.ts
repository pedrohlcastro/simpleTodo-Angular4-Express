import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  URL:string = 'http://localhost:8000/test'
  constructor(private _http:Http) { }

  getData(){
    return this._http.get(this.URL).map(res => res.json());
  }

  deleteItem(id){
    return this._http.delete(this.URL + '/' + id).map(res => res.json());
  }

  createItem(newItem:string){
    return this._http.post(this.URL, {text: newItem} ).map(res => res.json());
  }

}
