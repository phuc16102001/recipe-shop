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
      'Không phải ngẫu nhiên phở bò lại được các đầu bếp hàng đầu thế giới bình chọn là món ăn nên thử ít nhất 1 lần trong đời. Đằng sau mỗi tô phở ấy là một hương vị đặc trưng khó mà lẫn lộn',
      'https://ngonaz.com/wp-content/uploads/2021/09/cach-nau-pho-bo-nam-dinh-1.jpg'
    ),
    new Recipe(
      'Mì gói',
      'Hầu hết mọi người đều sử dụng mì gói vì nhanh chóng và tiện lợi. Do đó, cách sử dụng được mọi người ưa chuộng nhất là cho mì gói vào tô hoặc ly, thêm gói gia vị của mì và chế nước sôi, đợi trong 5 phút và dùng.',
      'https://cdn.tgdd.vn/Files/2017/03/30/966591/cach-su-dung-mi-goi-khong-anh-huong-den-suc-khoe-3_760x507.jpg'
    ),
  ];

  emitSelect = (recipe: Recipe) => {
    this.onWasSelect.emit(recipe);
  };

  constructor() {}

  ngOnInit(): void {}
}
