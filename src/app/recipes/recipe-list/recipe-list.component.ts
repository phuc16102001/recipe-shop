import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() onWasSelect = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Phở bò',
      'Mô tả',
      'https://ngonaz.com/wp-content/uploads/2021/09/cach-nau-pho-bo-nam-dinh-1.jpg'
    ),
    new Recipe(
      'Phở bò',
      'Mô tả',
      'https://ngonaz.com/wp-content/uploads/2021/09/cach-nau-pho-bo-nam-dinh-1.jpg'
    ),
  ];

  emitSelect = (recipe: Recipe) => {
    this.onWasSelect.emit(recipe);
  };

  constructor() {}

  ngOnInit(): void {}
}
