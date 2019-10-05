import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {
  }
  getList(cat) {
    let url ="";
    if (cat.toLowerCase() == 'all') {
      url = "http://localhost:3000/admin/products/";
    } else {
      url = "http://localhost:3000/admin/products/" + cat;
    }
    return this._http.get(url).pipe(map((res) => {
      return res
    }))
  }
}
