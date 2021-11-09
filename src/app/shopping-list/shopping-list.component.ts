import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Meat', 2),
    new Ingredient('dough', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
