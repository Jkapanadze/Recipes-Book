import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params
      .subscribe(
        (params) => {
          this.id = + params['id'];
          this.editMode = params['id'] != null;
        }
      )
  }

}
