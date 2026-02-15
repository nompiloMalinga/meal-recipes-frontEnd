import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { MealListService } from '../../service/meal-list-service';
import { CommonModule } from '@angular/common';
import { Meals } from '../../models/meals.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,MatInputModule, FormsModule],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.css',
})
export class MealList implements OnInit {
  categories: Category[]=[]
  meals: Meals[]=[];

  searchTerm: string ='';
  isSearching: boolean=false;



  constructor(private mealList: MealListService ){

  }

  ngOnInit(): void {
    this.mealList.getMealCategories().subscribe(data =>{
      this.categories = data
    });
  }

  onSearch(){
    const value = this.searchTerm.trim();
    if (!value){
      this.meals =[];
      return;
    }
    this.isSearching =true;

    this.mealList.getMealByName(value).subscribe(data =>{
      this.meals= data || [];
    });


    
  }

}
