import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { MealListService } from '../../service/meal-list-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.css',
})
export class MealList implements OnInit {
  categories: Category[]=[]


  constructor(private mealList: MealListService ){

  }

  ngOnInit(): void {
    this.mealList.getMealCategories().subscribe(data =>{
      this.categories = data
    })
  }



}
