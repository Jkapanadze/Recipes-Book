import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]= [
    new Recipe('Khinkali', 'Precious Georgian food',
      'https://i.pinimg.com/originals/9a/96/d1/9a96d1e92f7c3321a5c1de8c21524ba8.jpg'),
    new Recipe('Mtsvadi', 'Delicious food from Georgia',
      'https://gastronomia.ge/wp-content/uploads/2020/06/00-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
