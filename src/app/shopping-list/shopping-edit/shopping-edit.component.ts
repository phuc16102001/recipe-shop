import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;
  @Output() onAdd = new EventEmitter<Ingredient>();

  constructor() {}

  emitAdd = () => {
    const ingredientName = this.ingredientNameInput.nativeElement.value;
    const ingredientAmount = this.ingredientAmountInput.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.onAdd.emit(ingredient);
  };

  ngOnInit(): void {}
}
