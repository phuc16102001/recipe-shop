import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bánh phở', 3),
    new Ingredient('Ngò', 2),
    new Ingredient('Thịt bò', 2),
  ];

  constructor() {}

  ngOnInit(): void {}
}
