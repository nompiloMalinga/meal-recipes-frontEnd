import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class MealListService {

  private apiUrl = 'http://localhost:8080/api/meals'

  constructor(private http: HttpClient){}

  getMealCategories(): Observable<Category[]>{
    return this.http.get<{categories : Category[]}>(`${this.apiUrl}/categories`)
    .pipe(map(response => response.categories));

  }
  
}
