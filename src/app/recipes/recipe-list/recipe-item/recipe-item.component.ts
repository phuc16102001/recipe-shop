import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onSelect = new EventEmitter<void>();

  emitSelect = () => {
    this.onSelect.emit();
  };

  constructor() {}

  ngOnInit(): void {}
}
