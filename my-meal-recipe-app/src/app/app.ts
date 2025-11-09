import { Component, signal } from '@angular/core';
import { MealList } from './components/meal-list/meal-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MealList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-meal-recipe-app');
}
