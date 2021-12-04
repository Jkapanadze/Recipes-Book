import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{

  private recipes: Recipe[]= [
    new Recipe(
      0,
      'Khinkali',
      'Precious Georgian food',
      'https://i.pinimg.com/originals/9a/96/d1/9a96d1e92f7c3321a5c1de8c21524ba8.jpg',
      [new Ingredient('Comi', 2), new Ingredient('Xorci', 4)]),
    new Recipe(
      1,
      'Mtsvadi',
      'Delicious food from Georgia',
      'https://gastronomia.ge/wp-content/uploads/2020/06/00-1.jpg',
      [new Ingredient('Xorci', 6), new Ingredient('Broweuli', 3)])

];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    /* by using slice() we create exact copy of recipes, so real one won't change */
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
