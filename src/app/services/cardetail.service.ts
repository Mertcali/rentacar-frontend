import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/cardetail';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {


  apiUrl="https://localhost:44378/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

}