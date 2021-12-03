import {Component,  Input, OnInit, } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeServise: RecipeService) { }

  ngOnInit(): void {
  }

  onAddIngredients(){
    this.recipeServise.addIngredients(this.selectedRecipe.ingredients);
  }

}
