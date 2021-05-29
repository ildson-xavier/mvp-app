import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/model/product/productModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl, baseLocalUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: ProductModel;

  constructor( private http : HttpClient ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('userToken')
    })
  }

   getAll():Observable<any>{
    console.log("GETALL - I am sever");
    return //this.http.get(`${baseLocalUrl}product`, this.httpOptions)
    //.pipe(
    //  retry(1),
    //  catchError(this.errorHandl)
    //)
  } 

  getById(id: number):Observable<any>{
    console.log("GETBYID - I am sever - " + id);
    return // this.http.get(`${baseLocalUrl}product/${id}`, this.httpOptions)
  }

  delete(id: number):Observable<any>{
    try {
      console.log(`DELETE - I am sever - ${id}`);
      return //this.http.delete(`${baseLocalUrl}product/${id}`, this.httpOptions)
    }
    catch(error) {
        return error;
    }
  }

  add(product: ProductModel):Observable<any>{
    try {
      console.log(`Add - I am sever `+ product.description);
      return //this.http.post(`${baseLocalUrl}product/`, product, this.httpOptions)
    }
    catch(error) {
        return error;
    }
  }

  update( id: number, product: ProductModel ):Observable<any>{
    try {
      console.log(`Add - I am sever `+ product.description);
      return //this.http.put(`${baseLocalUrl}product/${id}`, product, this.httpOptions)
    }
    catch(error) {
        return error;
    } 
  }
  
}
