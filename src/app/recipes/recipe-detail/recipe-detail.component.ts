import {Component, OnInit, } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  public selectedRecipe;

  constructor(private recipeServise: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const list = this.recipeServise.getRecipes();
    this.route.params
      .subscribe(
        (params) => {
          this.selectedRecipe = list[+params['id']]
        }
      )
  }

  onAddIngredients(){
    this.recipeServise.addIngredients(this.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate([`edit`], {relativeTo: this.route})
  }

}
